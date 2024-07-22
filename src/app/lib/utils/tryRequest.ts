"use server";

import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";

type ApiFunction<M extends "GET" | "POST", T> = M extends "GET"
  ? () => Promise<AxiosResponse>
  : (body: T) => Promise<AxiosResponse>;

type TryRequestParams<M extends "GET" | "POST", T> = {
  method: M;
} & (M extends "GET"
  ? { body?: never; valid?: never; api: ApiFunction<M, T>; util?: () => void }
  : {
      body: Promise<T>;
      api: ApiFunction<M, T>;
      valid?: (body: T) => void | NextResponse;
      util?: (body: AxiosResponse) => void;
    });

const tryRequest = async <M extends "GET" | "POST", T>({
  method,
  body,
  valid,
  api,
  util,
}: TryRequestParams<M, T>) => {
  try {
    const getApi = async () => {
      if (method === "GET") return await (api as ApiFunction<"GET", T>)();
      const jsonBody = (await body) as T;

      if (valid) {
        void valid(jsonBody);
      }

      return await (api as ApiFunction<"POST", T>)(jsonBody);
    };

    const response = await getApi();

    if (util) {
      if (body) util(response);
      else util();
    }

    if (!response || !response.data) {
      return NextResponse.json(
        { error: "Internal server error" },
        { status: 500 },
      );
    }

    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
};

export default tryRequest;
