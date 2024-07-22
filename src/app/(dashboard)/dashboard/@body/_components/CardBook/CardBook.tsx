"use client";

import { Book } from "@/src/app/types/books.interface";

const CardBook = ({ book: { title, author, cover_image } }: { book: Book }) => (
  <div className={"cell"}>
    <h1>{title}</h1>
    <p>{author}</p>
    <img
      alt={`${title}`}
      src={`http://127.0.0.1:8000/${cover_image}`}
      width={300}
      height={300}
    />
  </div>
);

export default CardBook;
