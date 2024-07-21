import { BaseRoute } from "@/src/app/lib/api/routes/Base";

export class Profile extends BaseRoute {
  private profile = "/profile";

  /**
   * Получение данных профиля из куков
   * @httpMethod GET
   * @path /profile/
   */
  async getProfile() {
    return await this.http(this.profile + "/");
  }
}
