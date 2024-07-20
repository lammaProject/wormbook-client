import { ChangeEvent, FormEvent, useState } from "react";
import { createBook } from "@/src/app/lib/api/web/admin";

const useFormCreateBook = () => {
  const [book, setBook] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const sendForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const { data } = await createBook(formData);
    if (data) {
      setBook(true);
    }
  };

  const addImagePreview = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFile = event.target.files[0];
      setImage(selectedFile);

      if (selectedFile) {
        const objectUrl = URL.createObjectURL(selectedFile);
        setPreviewUrl(objectUrl);
      } else {
        setPreviewUrl(null);
      }
    }
  };

  return { sendForm, addImagePreview, image, previewUrl, book };
};

export default useFormCreateBook;
