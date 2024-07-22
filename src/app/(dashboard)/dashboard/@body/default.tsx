import { api } from "@/src/app/lib/api/Api";
import { Suspense } from "react";
import CardBook from "@/src/app/(dashboard)/dashboard/@body/_components/CardBook/CardBook";

export default async function Body() {
  const { data } = await api("server").books.getAllBooks();

  return (
    <div className={"grid"}>
      {!data && <div>LOADING</div>}
      <Suspense fallback={<div>LOADING</div>}>
        {data.books.map((book) => (
          <CardBook book={book} />
        ))}
      </Suspense>
    </div>
  );
}
