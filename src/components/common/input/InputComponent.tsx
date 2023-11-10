import classNames from "classnames";
import { FC, InputHTMLAttributes } from "react";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  type?: "text" | "password" | "email" | "number" | "date" | "time";
  field?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  clientSideError?: string;
  touched?: boolean | undefined;
  autoComplete?: string;
}

const InputComponent: FC<InputGroupProps> = ({
  label,
  type = "text",
  field,
  value,
  placeholder,
  onChange,
  clientSideError,
  touched,
  onFocus,
  autoComplete = "",
}) => {
  return (
    <div className="mb-3 col">
      <label htmlFor={field} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className={classNames("form-control", {
          "is-invalid": clientSideError && touched,
        })}
        id={field}
        name={field}
        value={value}
        onChange={onChange}
        aria-describedby="emailHelp"
        autoComplete={autoComplete}
        placeholder={placeholder}
        onFocus={onFocus}
      />

      {clientSideError && touched && (
        <div id="validationServerUsernameFeedback" className="invalid-feedback">
          {clientSideError}
        </div>
      )}
    </div>
  );
};

export default InputComponent;
