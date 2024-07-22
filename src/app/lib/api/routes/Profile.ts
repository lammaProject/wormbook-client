import { BaseRoute } from "@/src/app/lib/api/http/Base";
import { ProfileInterface } from "@/src/app/types/profile.interface";

export class Profile extends BaseRoute {
  private profile = "/profile";

  /**
   * Получение данных профиля из куков
   * @httpMethod GET
   * @path /profile/
   */
  async getProfile() {
    return await this.http.get<ProfileInterface>(this.profile + "/");
  }
}
