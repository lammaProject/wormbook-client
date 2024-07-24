import { api } from "@/src/app/lib/api/Api";

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await api("server", "books", "getBook", params.id);
  return (
    <div>
      <img
        alt={data.book.title}
        src={"http://127.0.0.1:8000/" + data.book.cover_image}
        width={200}
        height={200}
      />
      <h1>{data.book.title}</h1>
      <p>
        <h1>{data.book.author}</h1>
      </p>
    </div>
  );
}
