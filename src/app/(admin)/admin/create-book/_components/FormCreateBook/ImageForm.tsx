import { ChangeEvent, useState } from "react";
import { nameFormImage } from "@/src/app/(admin)/admin/create-book/_components/FormCreateBook/contants";

const ImageForm = ({
  name,
}: {
  name: "front_file" | "back_file" | "bot_file";
}) => {
  const [image, setImage] = useState<File | null>();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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

  return (
    <div className="field">
      <div className="file">
        <h1>{nameFormImage[name]}</h1>
        <label className="file-label">
          <input
            className="file-input"
            type="file"
            name={name}
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
              style={{ maxWidth: "200px", maxHeight: "200px" }}
            />
            <p>Имя файла: {image.name}</p>
            <p>Размер файла: {image.size} байт</p>
            <p>Тип файла: {image.type}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageForm;
