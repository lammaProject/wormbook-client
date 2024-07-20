import { cookies } from "next/headers";
import { getProfile } from "@/src/app/lib/api/backend/profile";

export default async function Page() {
  const data = await getProfile();
  console.log(data, "data");
  console.log(cookies().get("access_token"));

  return (
    <div className={"grid"}>
      {Array.from("adlkfmakldmfklamdfklma").map((i) => (
        <div className={"cell"}>{i}</div>
      ))}
    </div>
  );
}
