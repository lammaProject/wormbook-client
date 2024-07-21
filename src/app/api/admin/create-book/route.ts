import { NextRequest, NextResponse } from "next/server";
import api from "@/src/app/lib/api/Api";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    formData.forEach((key) => console.log(key));

    if (
      !formData.has("title") ||
      !formData.has("author") ||
      !formData.has("side") ||
      !formData.has("file")
    ) {
      return NextResponse.json({ error: "Обязательные поля" }, { status: 400 });
    }

    const response = await api("server").admin().createBook(formData);

    if (!response || !response.data) {
      return NextResponse.json(
        { error: "Ошибка на стороне сервера" },
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
