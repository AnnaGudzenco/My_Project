import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { AuthService } from '../admin/shared/services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (this.auth.isAuthentificated()) {
      req = req.clone({
        setParams: {
          auth: this.auth.token || '',
        },
      });
    }
    return next.handle(req).pipe(
      // tap(() => {
      //   console.log('Intercept');
      // }),
      catchError((err: HttpErrorResponse) => {
        //console.log('[Intercepter Error]', err);
        if (err.status === 401) {
          this.auth.logout();
          this.router.navigate(['/admin', 'login'], {
            queryParams: {
              authFailed: true,
            },
          });
        }
        return throwError(err);
      })
    );
  }
}
