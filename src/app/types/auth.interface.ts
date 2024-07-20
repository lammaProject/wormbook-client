export interface VerifyCode {
  email: string;
  code: string;
}

export interface SendVerifyCode extends Pick<VerifyCode, "email"> {}
