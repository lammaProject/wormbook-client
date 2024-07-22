import { BaseRoute } from "@/src/app/lib/api/http/Base";

export class Admin extends BaseRoute {
  private admin = "/admin";

  /**
   * Создание книги
   * @httpMethod POST
   * @path /admin/create-book
   * @param formData
   */
  async createBook(formData: FormData) {
    return await this.http.postForm(this.admin + "/create-book", formData);
  }
}
