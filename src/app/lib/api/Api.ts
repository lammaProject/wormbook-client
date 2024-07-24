import { Auth } from "./routes/Auth";
import { Profile } from "@/src/app/lib/api/routes/Profile";
import { Admin } from "@/src/app/lib/api/routes/Admin";
import { Books } from "@/src/app/lib/api/routes/Books";
import { AxiosResponse } from "axios";

export class Api {
  private readonly type: "client" | "server";

  constructor(type: "client" | "server") {
    this.type = type;
  }

  get auth() {
    return new Auth(this.type);
  }

  get profile() {
    return new Profile(this.type);
  }

  get admin() {
    return new Admin(this.type);
  }

  get books() {
    return new Books(this.type);
  }
}

export const api = async <
  T extends keyof Api,
  K extends keyof Api[T] & string,
  M extends Api[T][K],
  R extends M extends (...args: any[]) => Promise<AxiosResponse<infer D>>
    ? D
    : never,
  P extends M extends (...args: any[]) => any ? Parameters<M>[0] : never,
>(
  mode: "client" | "server",
  route: T,
  method: K,
  ...args: M extends (...args: any[]) => any
    ? Parameters<M> extends []
      ? []
      : [P]
    : never
): Promise<AxiosResponse<R>> => {
  return (new Api(mode)[route][method] as Function)(...args);
};

export const bindApi = <T extends keyof Api, K extends keyof Api[T]>(
  route: T,
  method: K,
): Api[T][K] => {
  return (new Api("server")[route][method] as Function).bind(
    new Api("server")[route],
  );
};
