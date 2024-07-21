"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import axios, { AxiosError } from "axios";

export async function serverInstance() {
  const http = axios.create({
    baseURL: "http://127.0.0.1:8000",
    withCredentials: true,
  });

  http.interceptors.request.use((config) => {
    const token = cookies().get("access_token");
    config.headers["Cookie"] = `access_token=${token ? token.value : ""}`;
    return config;
  });

  http.interceptors.response.use(
    (res) => res,
    (err: AxiosError) => {
      const code = err.response?.status;
      switch (code) {
        case 401:
        case 403:
          return redirect("/login");
      }
      return Promise.reject(err);
    },
  );
}