import React, { FC } from "react";

import { InputProps } from "./Input.types";

import "./Input.styles.scss";

const Input: FC<InputProps> = ({ text, value, onChange }) => {
  return (
    <div className="input-block">
      {value && <label className="input-block__label">{text}</label>}
      <input
        className="input-block__input"
        placeholder={text}
        value={value}
        onChange={(value) => onChange?.(value)}
      />
    </div>
  );
};

export default Input;
