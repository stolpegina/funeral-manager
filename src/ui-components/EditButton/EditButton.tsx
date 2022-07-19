import React, { FC } from "react";
import { ReactComponent as EditLogo } from "../../assets/Edit.svg";

import { EditButtonProps } from "./EditButton.types";

import "./EditButton.styles.scss";

const EditButton: FC<EditButtonProps> = ({ edit }) => {
  return (
    <div>
      <button className="edit-button" onClick={() => edit()}>
        <EditLogo />
      </button>
    </div>
  );
};

export default EditButton;
