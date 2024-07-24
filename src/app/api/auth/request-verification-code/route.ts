import { NextRequest, NextResponse } from "next/server";
import tryRequest from "@/src/app/lib/utils/tryRequest";
import isValidEmail from "@/src/app/lib/utils/isValidEmail";
import { SendVerifyCode } from "@/src/app/types/auth.interface";
import { bindApi } from "@/src/app/lib/api/Api";

export async function POST(request: NextRequest) {
  return await tryRequest<"POST", SendVerifyCode>({
    method: "POST",
    body: request.json(),
    valid: (body) => {
      if (!body.email) {
        return NextResponse.json(
          { error: "Email is required" },
          { status: 400 },
        );
      }

      if (!isValidEmail(body.email)) {
        return NextResponse.json(
          { error: "Invalid email format" },
          { status: 400 },
        );
      }
    },
    api: bindApi("auth", "sendVerificationCode"),
  });
}
