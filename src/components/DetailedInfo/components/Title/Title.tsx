import React, { FC, useState } from "react";
import Input from "../../../../ui-components/Input/Input";

import { ReactComponent as EditLogo } from "../../../../assets/Edit.svg";
import { ReactComponent as SaveLogo } from "../../../../assets/Save.svg";

import { TitleProps } from "./Title.types";

const Title: FC<TitleProps> = ({ name, onChange, onSave }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  if (isEditMode)
    return (
      <form
        className="detailed-info__head"
        onSubmit={(e) => {
          e.preventDefault();
          onSave();
          setIsEditMode(false);
        }}
      >
        <Input
          text="Короткое наименование"
          value={name}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />{" "}
        <button className="detailed-info__save" type="submit">
          <SaveLogo />
        </button>
      </form>
    );

  return (
    <div className="detailed-info__head">
      <h2 className="detailed-info__title">{name}</h2>{" "}
      <EditLogo
        className="detailed-info__edit"
        onClick={() => {
          setIsEditMode(true);
        }}
      />
    </div>
  );
};

export default Title;
