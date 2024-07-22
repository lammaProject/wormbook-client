import { AxiosInstance } from "axios";
import httpServer from "@/src/app/lib/api/http/httpServer";
import httpClient from "@/src/app/lib/api/http/httpClient";

export abstract class BaseRoute {
  protected http: AxiosInstance;

  private static clientHttp: AxiosInstance;
  private static serverHttp: AxiosInstance;

  constructor(type: "client" | "server") {
    if (type === "client") {
      this.http = httpClient;
      if (!BaseRoute.clientHttp) {
        BaseRoute.clientHttp = httpClient;
      }
      this.http = BaseRoute.clientHttp;
    } else {
      if (!BaseRoute.serverHttp) {
        BaseRoute.serverHttp = httpServer;
      }
      this.http = BaseRoute.serverHttp;
    }
  }
}
