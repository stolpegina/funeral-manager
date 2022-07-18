import React, { FC } from "react";
import "./Input.styles.scss";

interface Props {
  text: string;
  value: string;
  date?: boolean;
  onChange?: (value: any) => void;
}

const Input: FC<Props> = ({ text, value, date = false, onChange}) => {
  return (
    <div className="input-block">
      {value && <label className="input-block__label">{text}</label>}
      <input
        placeholder={text}
        value={value}
        type={date ? "date" : "text"}
        onChange={onChange && ((value) =>  onChange(value))}
      />
    </div>
  );
};

export default Input;
