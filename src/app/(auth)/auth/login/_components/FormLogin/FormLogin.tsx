"use client";

import useLogin from "@/src/app/(auth)/auth/login/_components/FormLogin/useLogin";
import { ChangeEvent } from "react";

const FormLogin = () => {
  const { addBody, isSendCode, sendCodeToEmail, sendVerifyCode } = useLogin();

  return (
    <div>
      {isSendCode ? (
        <form key={"code"} onSubmit={sendVerifyCode}>
          <h1 className={"is-size-3"}>Сюда напишите ваш код из EMAIL</h1>

          <div className={"field column"}>
            <input
              name={"code"}
              className="input"
              type="text"
              placeholder="code"
              required
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                addBody({ target: "code", value: e.target.value })
              }
            />
          </div>

          <div className={"field column"}>
            <button className={"button"}>Войти</button>
          </div>
        </form>
      ) : (
        <form key={"email"} onSubmit={sendCodeToEmail}>
          <h1 className={"is-size-3"}>Напишите ваш EMAIL</h1>
          <div className={"field column"}>
            <input
              name={"email"}
              className="input"
              type="email"
              placeholder="email"
              required
              onInput={(e: ChangeEvent<HTMLInputElement>) =>
                addBody({ target: "email", value: e.target.value })
              }
            />
          </div>

          <div className={"field column"}>
            <button type="submit" className={"button"}>
              Отправить
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default FormLogin;
