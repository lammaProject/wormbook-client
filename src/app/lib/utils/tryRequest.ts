"use server";

import { NextResponse } from "next/server";
import { AxiosResponse } from "axios";

type TryRequestParams<T, G> = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  api: T extends undefined
    ? () => Promise<AxiosResponse<G>>
    : (body: T) => Promise<AxiosResponse<G>>;
  body?: T | Promise<T>;
  valid?: (body: T) => void | NextResponse;
  util?: (response?: AxiosResponse<G>) => void;
};

const tryRequest = async <T, G>({
  body,
  valid,
  api,
  util,
}: TryRequestParams<T, G>) => {
  try {
    const getApi = async () => {
      if (!body) {
        return (api as () => Promise<AxiosResponse<G>>)();
      }

      const jsonBody = body instanceof Promise ? await body : body;

      if (valid) {
        void valid(jsonBody);
      }

      return await api(jsonBody);
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
