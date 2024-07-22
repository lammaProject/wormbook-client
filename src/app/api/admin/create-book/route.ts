import { NextRequest, NextResponse } from "next/server";
import tryRequest from "@/src/app/lib/utils/tryRequest";
import bindApi from "@/src/app/lib/utils/bindApi";

export async function POST(request: NextRequest) {
  return await tryRequest<"POST", FormData>({
    method: "POST",
    body: request.formData(),
    valid: (formData) => {
      if (
        !formData.has("title") ||
        !formData.has("author") ||
        !formData.has("side") ||
        !formData.has("file")
      ) {
        return NextResponse.json(
          { error: "Обязательные поля" },
          { status: 400 },
        );
      }
    },
    api: bindApi("admin", "createBook"),
  });
  // try {
  //   const formData = await request.formData();
  //   formData.forEach((key) => console.log(key));
  //
  //   if (
  //     !formData.has("title") ||
  //     !formData.has("author") ||
  //     !formData.has("side") ||
  //     !formData.has("file")
  //   ) {
  //     return NextResponse.json({ error: "Обязательные поля" }, { status: 400 });
  //   }
  //
  //   const response = await api("server").admin().createBook(formData);
  //
  //   if (!response || !response.data) {
  //     return NextResponse.json(
  //       { error: "Ошибка на стороне сервера" },
  //       { status: 500 },
  //     );
  //   }
  //
  //   return NextResponse.json(response.data);
  // } catch (err) {
  //   return NextResponse.json(
  //     { error: "Internal server error" },
  //     { status: 500 },
  //   );
  // }
}
