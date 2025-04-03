"use client";

import useFormCreateBook from "@/src/app/(admin)/admin/create-book/_components/FormCreateBook/useFormCreateBook";
import ImageForm from "@/src/app/(admin)/admin/create-book/_components/FormCreateBook/ImageForm";

const FormCreateBook = () => {
  const { sendForm, book } = useFormCreateBook();

  return (
    <form onSubmit={sendForm}>
      {book && <div>ИДЕАЛЬНО!</div>}
      <h1>Add Book</h1>

      <div className="field">
        <label className="label">Автор</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name={"author"}
            className="input is-success"
            type="text"
            placeholder="Text input"
          />
          <span className="icon is-small is-left"></span>
        </div>
      </div>

      <div className="field">
        <label className="label">Название</label>
        <div className="control">
          <input
            name={"title"}
            className="input"
            type="text"
            placeholder="Text input"
            required
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Категория</label>
        <div className="control">
          <input
            name={"category"}
            className="input"
            type="text"
            placeholder="Text input"
            value={"comedy"}
            required
          />
        </div>
      </div>

      <ImageForm name={"front_file"} />
      <ImageForm name={"back_file"} />
      <ImageForm name={"bot_file"} />

      <button type={"submit"} className={"button"}>
        SEND
      </button>
    </form>
  );
};

export default FormCreateBook;
