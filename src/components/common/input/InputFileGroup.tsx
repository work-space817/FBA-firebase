import { ChangeEvent, FC, InputHTMLAttributes, useState } from "react";

interface InputFileGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  field: string;
  onSelectFile: (base64: string) => void;
  clientSideError?: string[];
  error?: string | undefined;
  touched?: boolean | undefined;
  sourceData?: string | undefined;
}
const InputFileGroup: FC<InputFileGroupProps> = ({
  label = "Select file",
  field,
  onSelectFile,
  clientSideError,
  error,
  touched,
  sourceData,
}) => {
  const [selectImage, setSelectImage] = useState<File | null>(null);
  const onChangeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const file = files[0];
      const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        alert("Select other type of file");
        return;
      }
      console.log("selected file", file);
      setSelectImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = async () => {
        onSelectFile(reader.result as string);
      };
    }
    e.target.value = "";
  };

  return (
    <div className="mb-3">
      <label htmlFor={field} className="form-label">
        <h6>{label}</h6>
        {selectImage == null ? (
          sourceData ? (
            <img
              width="100"
              src={sourceData}
              alt="Selected"
              className="rounded-5"
            />
          ) : (
            <img
              width="100"
              className="img-fluid "
              src={
                require("../../../assets/svg/user icons/UserPhoto.svg").default
              }
              style={{ cursor: "pointer" }}
            />
          )
        ) : (
          <img
            width="100"
            src={URL.createObjectURL(selectImage)}
            className="rounded-5"
            alt="Selected"
          />
        )}
      </label>

      <input
        type="file"
        className="d-none"
        accept="image/jpeg, image/png, image/gif"
        id={field}
        onChange={onChangeFileHandler}
      />
      {clientSideError && touched && (
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          {clientSideError}
        </div>
      )}
      {error && touched && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default InputFileGroup;
