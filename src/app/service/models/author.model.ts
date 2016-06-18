
export interface Author {
  id:string;
  name:string;
  url:string;
  description:string;
  slug:string;
  avatar_urls:{
    24:string,
    48:string,
    96:string
  };
  _roles:string[];
  _email:string[];
  _registered:string[];
  _username:string,
  hash_email:string;
}
export interface avatar {
  avatar_urls
}
