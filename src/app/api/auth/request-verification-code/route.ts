import { NextRequest, NextResponse } from "next/server";
import { sendVerifactionCode } from "@/src/app/lib/api/backend/auth";
import isValidEmail from "@/src/app/lib/utils/isValidEmail";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Проверка наличия поля email
    if (!body.email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    const response = await sendVerifactionCode(body);

    // Проверка успешности верификации
    if (!response.data) {
      return NextResponse.json(
        { error: "Token verification failed" },
        { status: 401 },
      );
    }

    return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
