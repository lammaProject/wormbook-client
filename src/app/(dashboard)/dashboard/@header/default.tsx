import Link from "next/link";
import { api } from "@/src/app/lib/api/Api";

export default async function Default() {
  const { data } = await api("server").profile.getProfile();

  return (
    <nav className="navbar has-background" role="navigation">
      <div className="navbar-start">
        <div className={"is-flex block is-flex-direction-column is-center"}>
          <p>
            <strong>{data.username}</strong>
          </p>
          <div>
            прочитано: <strong className={"is-text is-primary"}>0</strong>
          </div>
          <div></div>
        </div>
        {data && data.role === "admin" && (
          <Link className="button" href={"/admin/create-book"}>
            Добавить книгу
          </Link>
        )}
      </div>
      <div className="navbar-end ">
        <div className="navbar-item">
          {data && data.username ? (
            <div className="buttons">
              <Link className="button is-warning" href={"/auth/logout"}>
                <strong>Выйти</strong>
              </Link>
            </div>
          ) : (
            <div className="buttons">
              <Link className="button is-primary" href={"/auth/login"}>
                <strong>Войти</strong>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
