import React, { FC, useState } from "react";
import "./Input.styles.scss";

interface Props {
  text: string;
  initialValue: string;
}

const Input: FC<Props> = ({ text, initialValue }) => {
  const [value, setValue] = useState<string| undefined>(initialValue);
  return (
    <div className="input-block">
      {value && <label className="input-block__label">{text}</label>}
      <input
        placeholder={text}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
    </div>
  );
};

export default Input;
