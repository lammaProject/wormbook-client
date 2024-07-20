"use client";

import useLogin from "@/src/app/(login)/login/_components/FormLogin/useLogin";
import { ChangeEvent } from "react";

const FormLogin = () => {
  const { addBody, sendCode, sendCodeToEmail, sendVerifyCode } = useLogin();

  return (
    <div>
      {sendCode ? (
        <form
          key={"code"}
          onSubmit={(event) => {
            event.preventDefault();
            void sendVerifyCode();
          }}
        >
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
        <form
          key={"email"}
          onSubmit={(event) => {
            event.preventDefault();
            void sendCodeToEmail();
          }}
        >
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
