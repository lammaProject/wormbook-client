import { BaseRoute } from "@/src/app/lib/api/http/Base";
import { Book } from "@/src/app/types/books.interface";

export class Books extends BaseRoute {
  private books = "/books";

  async getAllBooks() {
    return this.http.get<{ books: Book[] }>(this.books + "/");
  }

  async getBook() {
    return await this.http.get(this.books + "/get-book");
  }
}
