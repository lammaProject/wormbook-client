export interface Book {
  id: number;
  title: string;
  author: string;
  cover_image: string;
}

export interface GetBook extends Pick<Book, "author" | "title"> {}
