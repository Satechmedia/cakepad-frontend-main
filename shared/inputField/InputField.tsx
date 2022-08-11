import React from "react";
import styles from "./InputField.module.scss";

import Image from "next/image";

interface Props {
  value?: string | number;
  icon?: string;
  placeholder?: string;
  name?: string;
  label?: string;
  type?: "text" | "email" | "number" | "password";
  className?: string;
  labelClass?: string;
  wrapperClass?: string;
  inputClass?: string;
  required?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
}

const InputField = ({
  name,
  value,
  type = "text",
  icon,
  label,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  required,
  className,
  labelClass,
  wrapperClass,
  inputClass,
}: Props) => {
  return (
    <div className={`${styles.input} ${className}`}>
      {!!label && (
        <label className={`${styles.input_label} ${labelClass}`} htmlFor={name}>
          {label}
        </label>
      )}

      <div className={`${styles.input_wrapper} ${wrapperClass}`}>
        {!!icon && (
          <figure className={styles.input_icon}>
            <Image src={icon} layout="fill" />
          </figure>
        )}
        <input
          required={required}
          className={`${styles.input_field} ${inputClass}`}
          type={type}
          data-icon={!!icon}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          onBlur={onBlur}
          onFocus={onFocus}
        />
      </div>
    </div>
  );
};

export default InputField;
