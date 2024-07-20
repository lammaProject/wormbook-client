import { useState } from "react";
import { VerifyCode } from "@/src/app/types/auth.interface";
import { sendVerifactionCode, verifyToken } from "@/src/app/lib/api/web/auth";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();
  const [body, setBody] = useState<VerifyCode>({ email: "", code: "" });
  const [sendCode, setSendCode] = useState(false);

  const sendCodeToEmail = async () => {
    if (body) {
      setSendCode(true);
      void (await sendVerifactionCode(body));
    }
  };

  const sendVerifyCode = async () => {
    if (body) {
      void verifyToken(body);
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
