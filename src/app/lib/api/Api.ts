import { Auth } from "./routes/Auth";
import { Profile } from "@/src/app/lib/api/routes/Profile";
import { Admin } from "@/src/app/lib/api/routes/Admin";

class Api {
  private readonly type: "client" | "server";

  constructor(type: "client" | "server") {
    this.type = type;
  }

  auth() {
    return new Auth(this.type);
  }

  profile() {
    return new Profile(this.type);
  }

  admin() {
    return new Admin(this.type);
  }
}

const api = (mode: "client" | "server") => new Api(mode);

export default api;
