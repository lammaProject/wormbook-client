import { api } from "@/src/app/lib/api/Api";
import Scene from "@/src/app/lib/models/Scene";
import Book from "@/src/app/lib/models/Book.model";

export default async function Page({ params }: { params: { id: string } }) {
  const { data } = await api("server", "books", "getBook", params.id);
  return (
    <div>
      <div style={{ width: "300px", height: "300px" }}>
        <Scene
          model={
            <Book
              front_file={process.env.BACKEND_URL + data.book.front_file}
              back_file={process.env.BACKEND_URL + data.book.back_file}
              bot_file={process.env.BACKEND_URL + data.book.bot_file}
            />
          }
          props={
            <>
              <ambientLight intensity={Math.PI / 2} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <pointLight
                position={[-10, -10, -10]}
                decay={0}
                intensity={Math.PI}
              />
            </>
          }
        />
      </div>
      <h1>{data.book.title}</h1>
      <h1>{data.book.author}</h1>
    </div>
  );
}
