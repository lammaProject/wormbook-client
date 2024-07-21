import { useState } from "react";
import { VerifyCode } from "@/src/app/types/auth.interface";
import { useRouter } from "next/navigation";
import api from "@/src/app/lib/api/Api";

const useLogin = () => {
  const router = useRouter();
  const [body, setBody] = useState<VerifyCode>({ email: "", code: "" });
  const [sendCode, setSendCode] = useState(false);

  const sendCodeToEmail = async () => {
    if (body) {
      setSendCode(true);
      void api("client").auth().sendVerificationCode(body);
    }
  };

  const sendVerifyCode = async () => {
    if (body) {
      void api("client").auth().verifyToken(body);
      router.push("/dashboard");
    }
  };

  const addBody = ({
    target,
    value,
  }: {
    target: "email" | "code";
    value: string;
  }) => {
    setBody((prev) => ({
      ...prev,
      [target]: value,
    }));
  };

  return { addBody, sendCode, sendCodeToEmail, sendVerifyCode };
};

export default useLogin;
