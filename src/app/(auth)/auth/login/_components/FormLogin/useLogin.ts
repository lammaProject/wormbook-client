"use client";

import { FormEvent, useState } from "react";
import { VerifyCode } from "@/src/app/types/auth.interface";
import { useRouter } from "next/navigation";
import { api } from "@/src/app/lib/api/Api";

const useLogin = () => {
  const router = useRouter();

  const [body, setBody] = useState<VerifyCode>({ email: "", code: "" });
  const [isSendCode, setIsSendCode] = useState(false);

  const sendCodeToEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (body) {
      setIsSendCode(true);
      void api("client", "auth", "sendVerificationCode", body);
    }
  };

  const sendVerifyCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(body);
    if (body) {
      console.log(body);
      const response = await api("client", "auth", "verifyToken", body);
      if (response) router.push("/dashboard");
    }
  };

  const addBody = ({
    target,
    value,
  }: {
    target: "email" | "code";
    value: string;
  }) => {
    console.log(value);
    setBody((prev) => ({
      ...prev,
      [target]: value,
    }));
  };

  return { addBody, isSendCode, sendCodeToEmail, sendVerifyCode };
};

export default useLogin;
