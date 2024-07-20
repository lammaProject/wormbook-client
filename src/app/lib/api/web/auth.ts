import http from "./http";
import { SendVerifyCode, VerifyCode } from "@/src/app/types/auth.interface";

const auth = "/auth";

// Отправление email: string серверу
export const sendVerifactionCode = async (data: SendVerifyCode) =>
  await http.post(auth + "/request-verification-code", data);

// Отправление email:string code:string серверу
export const verifyToken = async (data: VerifyCode) =>
  await http.post<{ access_token: string }>(auth + "/verify-code", data);
