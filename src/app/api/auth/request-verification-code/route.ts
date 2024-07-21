import { NextRequest, NextResponse } from "next/server";
import isValidEmail from "@/src/app/lib/utils/isValidEmail";
import api from "@/src/app/lib/api/Api";

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

    const response = await api("server").auth().sendVerificationCode(body);

    // Проверка успешности верификации
    if (!response || !response.data) {
      return NextResponse.json(
        { error: "Проблема на стороне сервера" },
        { status: 500 },
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
