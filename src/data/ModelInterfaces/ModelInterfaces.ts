export type booksResponse = {
  _id: string;
  url: string;
  about: string;
  title: string;
  author: string;
};
export type booksAddModel = {
  url: string;
  about: string;
  title: string;
  author: string;
};
export type AuthorAddModel = {
  name: string;
  pic: string;
};
export type AuthorDataResponse = {
  name: string;
  pic: string;
  _id: string;
};
