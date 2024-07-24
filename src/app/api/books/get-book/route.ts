import tryRequest from "@/src/app/lib/utils/tryRequest";
import { bindApi } from "@/src/app/lib/api/Api";

export async function GET() {
  return await tryRequest({
    method: "GET",
    api: bindApi("books", "getBook"),
  });
}
