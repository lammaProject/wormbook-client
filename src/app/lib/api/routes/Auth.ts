// api/auth.ts
import { BaseRoute } from "../http/Base";
import { SendVerifyCode, VerifyCode } from "@/src/app/types/auth.interface";

export class Auth extends BaseRoute {
  private auth = "/auth";

  /**
   * Отправление кода на почту
   * @httpMethod POST
   * @path /auth/request-verification-code
   * @param {SendVerifyCode.email} body - данные для
   * @param {string} body.email - Почта на которую надо отправить код верификации
   */
  async sendVerificationCode(body: SendVerifyCode) {
    return await this.http.post(this.auth + "/request-verification-code", body);
  }

  /**
   * Отправление кода верификации на почту
   * @httpMethod POST
   * @path /auth/request-verification-code
   * @param {VerifyCode} body - Данные для отправки кода верификации
   * @param {string} body.email - Email адрес на который отправлялся код
   * @param {string} body.code - Сам код верификации
   */
  async verifyToken(body: VerifyCode) {
    return await this.http.post<{ access_token: string }>(
      this.auth + "/verify-code",
      body,
    );
  }
}
