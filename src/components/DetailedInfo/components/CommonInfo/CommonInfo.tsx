import React, { FC, useState } from "react";
import moment from "moment";
import Input from "../../../../ui-components/Input/Input";

import { CommonInfoProps } from "./CommonInfo.types";
import { CompanyType } from "../../../../types/company";

import { ReactComponent as EditLogo } from "../../../../assets/Edit.svg";
import { ReactComponent as SaveLogo } from "../../../../assets/Save.svg";
import Checkbox from "../../../../ui-components/Checkbox/Checkbox";

const CommonInfo: FC<CommonInfoProps> = ({ data, onChange, onSave }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  let type: string[] = [];
  data.type.forEach((item) => {
    if (item === CompanyType.Agent) type.push("Агент");
    if (item === CompanyType.Contractor) type.push("Подрядчик");
  });

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
            onChange={(e) => {
              onChange("name", e.target.value);
            }}
          />
          <Input
            text="Форма"
            value={data.businessEntity}
            onChange={(e) => {
              onChange("businessEntity", e.target.value);
            }}
          />
          {/* TODO: Заменить на компонент Checkbox */}
          {/* <Input
            text="Тип"
            value={data.type}
            onChange={(e) => {
              onChange("type", e.target.value);
            }}
          /> */}
          <div className="detailed-info__checkbox-container">
            <label className="detailed-info__checkbox-label">Тип</label>
            <div className="detailed-info__checkbox">
              {data.type.map((item) => (
                <Checkbox
                  name={item}
                  onChange={(e) => {
                    if (e.target.checked) {
                      onChange("type", [item]);
                    }
                  }}
                />
              ))}
            </div>
          </div>
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
        <div className="detailed-info__frame">
          <h4 className="detailed-info__label">Полное название:</h4>
          <span>{data.name}</span>
        </div>
        <div className="detailed-info__frame">
          <h4 className="detailed-info__label">Договор:</h4>
          <span>
            {data.contract.no} от{" "}
            {moment(data.contract.issue_date).format("DD.MM.YYYY")}
          </span>
        </div>
        <div className="detailed-info__frame">
          <h4 className="detailed-info__label">Форма:</h4>
          <span>{data.businessEntity}</span>
        </div>
        <div className="detailed-info__frame">
          <h4 className="detailed-info__label">Тип:</h4>
          <span>{type.join(", ")}</span>
        </div>
      </div>
    </div>
  );
};

export default CommonInfo;
