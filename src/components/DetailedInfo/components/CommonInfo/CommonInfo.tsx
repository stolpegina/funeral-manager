import React, { FC, useState } from "react";
import moment from "moment";
import Input from "../../../../ui-components/Input/Input";

import { CommonInfoProps } from "./CommonInfo.types";

import { ReactComponent as EditLogo } from "../../../../assets/Edit.svg";
import { ReactComponent as SaveLogo } from "../../../../assets/Save.svg";

const CommonInfo: FC<CommonInfoProps> = ({ data, onChange, onSave }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  if (isEditMode)
    return (
      <div className="detailed-info__section">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave();
            setIsEditMode(false);
          }}
        >
          <div className="detailed-info__head">
            <h3 className="detailed-info__section-title">ОБЩАЯ ИНФОРМАЦИЯ</h3>{" "}
            <button className="detailed-info__save" type="submit">
              <SaveLogo />
            </button>
          </div>

          <Input
            text="Полное название"
            value={data.name}
            onChange={(e: any) => {
              onChange("name", e.target.value);
            }}
          />
          <Input
            text="Номер договора"
            value={data.contract.no}
            onChange={(e: any) => {
              onChange("contract", { ...data.contract, no: e.target.value });
            }}
          />
          <Input
            text="Дата договора"
            value={data.contract.issue_date}
            onChange={(e: any) => {
              onChange("contract", {
                ...data.contract,
                issue_date: e.target.value,
              });
            }}
          />
          <Input
            text="Форма"
            value={data.businessEntity}
            onChange={(e: any) => {
              onChange("businessEntity", e.target.value);
            }}
          />
          <Input
            text="Тип"
            value={data.type}
            onChange={(e: any) => {
              onChange("type", e.target.value);
            }}
          />
        </form>
      </div>
    );

  return (
    <div className="detailed-info__section">
      <div className="detailed-info__head">
        <h3 className="detailed-info__section-title">ОБЩАЯ ИНФОРМАЦИЯ</h3>{" "}
        <EditLogo
          className="detailed-info__edit"
          onClick={() => {
            setIsEditMode(true);
          }}
        />
      </div>
      <div>
        <h4 className="detailed-info__label">Полное название:</h4>
        <span>{data.name}</span>
        <h4 className="detailed-info__label">Договор:</h4>
        <span>
          {data.contract.no} от{" "}
          {moment(data.contract.issue_date).format("DD.MM.YYYY")}
        </span>
        <h4 className="detailed-info__label">Форма:</h4>
        <span>{data.businessEntity}</span>
        <h4 className="detailed-info__label">Тип:</h4>
        {data.type.map((item: string) => (
          <span>{item === "agent" ? "Агент" : "Подрядчик"}</span>
        ))}
      </div>
    </div>
  );
};

export default CommonInfo;
