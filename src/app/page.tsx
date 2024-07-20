import Link from "next/link";

export default function Home() {
  return (
    <section className="section is-primary is-large">
      <div
        className={"is-flex is-justify-content-center is-align-content-center"}
      >
        <Link href="/dashboard">ПЕРЕЙТИ НА ГЛАВНУЮ</Link>
      </div>
    </section>
  );
}
