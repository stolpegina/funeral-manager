import React, { FC, useState } from "react";
import Input from "../../../../ui-components/Input/Input";

import { ContactsProps } from "./Contacts.types";

import { ReactComponent as EditLogo } from "../../../../assets/Edit.svg";
import { ReactComponent as SaveLogo } from "../../../../assets/Save.svg";

const Contacts: FC<ContactsProps> = ({ data, onChange, onSave }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  if (isEditMode)
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSave();
          setIsEditMode(false);
        }}
      >
        <div className="detailed-info__head">
          <h3 className="detailed-info__section-title">КОНТАКТНЫЕ ДАННЫЕ</h3>{" "}
          <button className="detailed-info__save" type="submit">
            <SaveLogo />
          </button>
        </div>
        <Input
          text="Фамилия"
          value={data.lastname}
          onChange={(e) => {
            onChange("lastname", e.target.value);
          }}
        />
        <Input
          text="Имя"
          value={data.firstname}
          onChange={(e) => {
            onChange("firstname", e.target.value);
          }}
        />
        <Input
          text="Отчество"
          value={data.patronymic}
          onChange={(e) => {
            onChange("patronymic", e.target.value);
          }}
        />
        <Input
          text="Телефон:"
          value={data.phone}
          onChange={(e) => {
            onChange("phone", e.target.value);
          }}
        />
        <Input
          text="Эл. почта:"
          value={data.email}
          onChange={(e) => {
            onChange("email", e.target.value);
          }}
        />
      </form>
    );

  return (
    <>
      <div className="detailed-info__head">
        <h3 className="detailed-info__section-title">КОНТАКТНЫЕ ДАННЫЕ</h3>{" "}
        <EditLogo
          className="detailed-info__edit"
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      </div>
      <div className="detailed-info__frame">
        <h4 className="detailed-info__label">ФИО:</h4>
        <span>
          {data.lastname} {data.firstname} {" "}
          {data.patronymic}
        </span>
      </div>
      <div className="detailed-info__frame">
        <h4 className="detailed-info__label">Телефон:</h4>
        <span>{data.phone}</span>
      </div>
      <div className="detailed-info__frame">
        <h4 className="detailed-info__label">Эл. почта:</h4>
        <span>{data.email}</span>
      </div>
    </>
  );
};

export default Contacts;
