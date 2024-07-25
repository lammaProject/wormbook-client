export interface Book {
  id: number;
  title: string;
  author: string;
  front_file: string;
  back_file: string;
  bot_file: string;
  category: string;
  rating: number;
}

export interface GetBook extends Pick<Book, "author" | "title"> {}
