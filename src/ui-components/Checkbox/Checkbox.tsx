import React, { FC } from "react";
import { CheckboxProps } from "./Checkbox.types";

import "./Checkbox.styles.scss";
import { CompanyType } from "../../types/company";

const Checkbox: FC<CheckboxProps> = ({ name, onChange }) => {
  return (
    <div className="checkbox">
      <input
        className="checkbox__box"
        type="checkbox"
        id={name}
        name={name}
        onChange={(e) => onChange?.(e)}
      />
      <label htmlFor={name}>
        {name === CompanyType.Agent ? "Агент" : "Подрядчик"}
      </label>
    </div>
  );
};

export default Checkbox;
