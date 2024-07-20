import { NextRequest, NextResponse } from "next/server";
import { createBook } from "@/src/app/lib/api/backend/admin";

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

    const response = await createBook(formData);

    if (!response.data) {
      return NextResponse.json({ error: "no data" }, { status: 401 });
    }

    return NextResponse.json(response.data);
  } catch (err) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
