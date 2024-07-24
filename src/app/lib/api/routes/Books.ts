import { BaseRoute } from "@/src/app/lib/api/http/Base";
import { Book } from "@/src/app/types/books.interface";

export class Books extends BaseRoute {
  private books = "/books";

  async getAllBooks() {
    return this.http.get<{ books: Book[] }>(this.books + "/");
  }

  async getBook(body: string) {
    return await this.http.get<{ book: Book }>(
      this.books + "/book/?book_id=" + body,
    );
  }
}
