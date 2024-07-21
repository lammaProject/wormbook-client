"use server";

import axios, { AxiosError } from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const httpServer = axios.create({
  baseURL: "http://127.0.0.1:8000",
  withCredentials: true,
});

httpServer.interceptors.request.use((config) => {
  const token = cookies().get("access_token");
  config.headers["Cookie"] = `access_token=${token ? token.value : ""}`;
  return config;
});
httpServer.interceptors.response.use(
  (res) => {
    return res;
  },
  (err: AxiosError) => {
    const code = err.response?.status;
    switch (code) {
      case 401:
      case 403:
        return redirect("/login");
    }
  },
);

export default httpServer;
