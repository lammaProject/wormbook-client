"use client";

import useFormCreateBook from "@/src/app/(admin)/admin/create-book/_components/FormCreateBook/useFormCreateBook";

const FormCreateBook = () => {
  const { sendForm, addImagePreview, image, previewUrl, book } =
    useFormCreateBook();

  return (
    <form onSubmit={sendForm}>
      {book && <div>ИДЕАЛЬНО!</div>}
      <h1>Add Book</h1>

      <div className="field">
        <label className="label">title</label>
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
        <label className="label">author</label>
        <div className="control has-icons-left has-icons-right">
          <input
            name={"author"}
            className="input is-success"
            type="text"
            placeholder="Text input"
          />
          <span className="icon is-small is-left"></span>
        </div>
        <p className="help is-success">This username is available</p>
      </div>

      <div className="field">
        <label className="label">side</label>
        <div className="control">
          <input
            name={"side"}
            className="input"
            type="text"
            placeholder="Text input"
            required
          />
        </div>
      </div>

      <div className="file">
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name="file"
            onChange={addImagePreview}
          />
          <span className="file-cta">
            <span className="file-icon">
              <i className="fas fa-upload"></i>
            </span>
            <span className="file-label"> Choose a file… </span>
          </span>
        </label>

        {image && (
          <div>
            <img
              src={previewUrl || ""}
              alt="Preview"
              style={{ maxWidth: "300px" }}
            />
            <p>Имя файла: {image.name}</p>
            <p>Размер файла: {image.size} байт</p>
            <p>Тип файла: {image.type}</p>
          </div>
        )}
      </div>

      <button className={"button"}>SEND</button>
    </form>
  );
};

export default FormCreateBook;
