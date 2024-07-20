import Link from "next/link";

export default async function Default() {
  return (
    <nav className="navbar has-background" role="navigation">
      <div className="navbar-start">
        <Link className="navbar-item" href={"/admin/create-book"}>
          Добавить книгу
        </Link>
      </div>
      <div className="navbar-end ">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button is-primary" href={"/login"}>
              <strong>Войти</strong>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
