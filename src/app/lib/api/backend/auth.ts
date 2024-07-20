import { SendVerifyCode, VerifyCode } from "@/src/app/types/auth.interface";
import http from "./http";

const auth = "/auth";

// Отправление кода на почту
export const sendVerifactionCode = async (data: SendVerifyCode) =>
  await http.post(auth + "/request-verification-code", data);

// Отправление кода для получения токена
export const verifyToken = async (data: VerifyCode) =>
  await http.post<{ access_token: string }>(auth + "/verify-code", data);
