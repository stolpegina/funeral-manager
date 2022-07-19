import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.styles.scss";

const Checkbox: FC<CheckboxProps> = ({ name, label, checked, onChange }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__box"
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
