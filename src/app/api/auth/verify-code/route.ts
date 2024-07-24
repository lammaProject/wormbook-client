import isValidEmail from "@/src/app/lib/utils/isValidEmail";
import tryRequest from "@/src/app/lib/utils/tryRequest";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { bindApi } from "@/src/app/lib/api/Api";

export async function POST(request: Request) {
  return await tryRequest({
    method: "POST",
    body: request.json(),
    valid: (body) => {
      if (!body.email || !body.code) {
        return NextResponse.json(
          { error: "Email or code is required" },
          { status: 400 },
        );
      }
      if (!isValidEmail(body.email)) {
        return NextResponse.json({ error: "Email is cancel" }, { status: 400 });
      }
    },
    api: bindApi("auth", "verifyToken"),
    util: (response) => {
      if (response) cookies().set("access_token", response.data.access_token);
    },
  });
}
