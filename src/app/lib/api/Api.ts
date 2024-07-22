import { Auth } from "./routes/Auth";
import { Profile } from "@/src/app/lib/api/routes/Profile";
import { Admin } from "@/src/app/lib/api/routes/Admin";
import { Books } from "@/src/app/lib/api/routes/Books";

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

export const api = (mode: "client" | "server") => new Api(mode);
