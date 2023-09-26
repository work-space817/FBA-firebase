import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "time"; //може не передаватися у пропсах для компонента(| - один із можливих варіатнів, які можуть буть)
  field: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errors?: string[];
  error?: string | undefined;
  touched?: boolean | undefined;
}

const InputComponent: FC<InputGroupProps> = ({
  label,
  type = "text",
  field,
  value,
  placeholder,
  onChange,
  errors,
  error,
  touched,
}) => {
  return (
    <div className="mb-3 col">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={classNames("form-control", {
          "is-invalid": errors || (error && touched),
        })}
        id={field}
        name={field}
        value={value}
        onChange={onChange}
        aria-describedby="emailHelp"
        placeholder={placeholder}
      />
      {errors && (
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          {errors.map((err, index) => (
            <span key={index}>{err}</span>
          ))}
        </div>
      )}
      {error && touched && (
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          {error}
        </div>
      )}
    </div>
  );
};

export default InputComponent;
