export interface User {
  email: String;
  password: String;
  returnSecureToken?: boolean;
}

export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface Post {
  id?: string;
  title: string;
  author: string;
  text: string;
  date: Date;
}

export interface FbCreateResponse {
  name: string;
}
