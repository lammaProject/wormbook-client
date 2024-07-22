import Link from "next/link";
import { logoutAction } from "@/src/app/(auth)/auth/logout/_actions/logoutAction";

export default function Logout() {
  return (
    <div>
      <h1>Вы уверены что хотите выйти?</h1>
      <form action={logoutAction}>
        <button type={"submit"}>Да</button>
      </form>
      <Link href={"/dashboard"}>На главную</Link>
    </div>
  );
}
