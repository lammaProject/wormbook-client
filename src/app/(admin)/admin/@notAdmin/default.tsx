import Link from "next/link";

export default function Default() {
  return (
    <section>
      <div>У вас нет прав администратора</div>
      <Link className={"button"} href={"/"}>
        НА ГЛАВНУЮ
      </Link>
    </section>
  );
}
