import api from "@/src/app/lib/api/Api";

export default async function Page() {
  void (await api("server").profile().getProfile());

  return (
    <div className={"grid"}>
      {Array.from("adlkfmakldmfklamdfklma").map((i) => (
        <div className={"cell"}>{i}</div>
      ))}
    </div>
  );
}
