"use client";

import { FormEvent, useState } from "react";
import { api } from "@/src/app/lib/api/Api";

const useFormCreateBook = () => {
  const [book, setBook] = useState(false);

  const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    formData.set("rating", "0");
    const { data } = await api("client", "admin", "createBook", formData);

    if (data) {
      setBook(true);
    }
  };

  return { sendForm, book };
};

export default useFormCreateBook;
