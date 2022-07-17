import React, { FC, useState } from "react";
import "./Input.styles.scss";

interface Props {
  text?: string;
}

const Input: FC<Props> = ({ text }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="input-block">
      {value && <label className="input-block__label">{text}</label>}
      <input placeholder={text} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
};

export default Input;
