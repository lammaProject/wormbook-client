import { NextRequest, NextResponse } from "next/server";
import tryRequest from "@/src/app/lib/utils/tryRequest";
import { bindApi } from "@/src/app/lib/api/Api";

export async function POST(request: NextRequest) {
  return await tryRequest({
    method: "POST",
    body: request.formData(),
    valid: (formData) => {
      console.log(formData);
      if (
        !formData.has("title") ||
        !formData.has("author") ||
        !formData.has("category")
      ) {
        return NextResponse.json(
          { error: "Обязательные поля" },
          { status: 400 },
        );
      }
    },
    api: bindApi("admin", "createBook"),
    util: (response) => {
      console.log(response);
    },
  });
}
