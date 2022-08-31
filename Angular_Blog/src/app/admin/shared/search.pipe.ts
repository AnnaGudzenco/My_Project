import { Pipe, PipeTransform } from '@angular/core';
import { Post } from 'src/app/shared/interfaces';

@Pipe({
  name: 'searchPosts',
})
export class SearchPipe implements PipeTransform {
  transform(posts: Post[], search = '') {
    if (!search.trim()) {
      return posts;
    }
    // console.log(search);

    return posts.filter((p) =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
  }
}
