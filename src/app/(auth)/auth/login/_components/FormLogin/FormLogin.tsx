"use client";

import useLogin from "@/src/app/(auth)/auth/login/_components/FormLogin/useLogin";
import { ChangeEvent } from "react";
import { Button } from "@headlessui/react";

const FormLogin = () => {
  const { addBody, isSendCode, sendCodeToEmail, sendVerifyCode } = useLogin();

  return (
    <div className={"flex bg-dark"}>
      {isSendCode ? (
        <form key={"code"} onSubmit={sendVerifyCode}>
          <h1>Сюда напишите ваш код из EMAIL</h1>

          <div>
            <input
              name={"code"}
              type="text"
              placeholder="code"
              required
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                addBody({ target: "code", value: e.target.value })
              }
            />
          </div>

          <div>
            <Button type={"submit"}>Войти</Button>
          </div>
        </form>
      ) : (
        <form key={"email"} onSubmit={sendCodeToEmail}>
          <h1>Напишите ваш EMAIL</h1>
          <div>
            <input
              name={"email"}
              type="email"
              placeholder="email"
              className={"form-input px-4 py-3 rounded-full"}
              required
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                addBody({ target: "email", value: e.target.value })
              }
            />
          </div>

          <Button className={"worm-button"} type="submit">
            Отправить
          </Button>
        </form>
      )}
    </div>
  );
};

export default FormLogin;
