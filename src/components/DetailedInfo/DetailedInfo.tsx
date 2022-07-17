import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui-components/Input/Input";
import "./DetailedInfo.styles.scss";
import { ReactComponent as LinkedLogo } from "../../assets/Linked.svg";
import { ReactComponent as RotationLogo } from "../../assets/Rotation.svg";
import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";
import { ReactComponent as LongLogo } from "../../assets/Long.svg";
import Modal from "react-modal";
import { getCompany, getContacts, getImages } from "../../api";
import EditButton from "../../ui-components/EditButton/EditButton";
import { ReactComponent as SaveLogo } from "../../assets/Save.svg";
import moment from "moment";
import Button from "../../ui-components/Button/Button";

const DetailedInfo = () => {
  const [data, setData] = useState<any>(null);
  const [dataContacts, setDataContacts] = useState<any>(null);
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);
  const [isEditContacts, setIsEditContacts] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompany(12).then((resp) => resp.json());
      setData(data);

      const dataContacts = await getContacts(16).then((resp) => resp.json());
      setDataContacts(dataContacts);
    };
    fetchData();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch((err) => {
      console.log("Something went wrong", err);
    });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const editData = () => {
    console.log("редактор");
  };

  const deleteItem = () => {};

  if (!data || !dataContacts)
    return (
      <div className="detailed-info">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="detailed-info">
      <div className="detailed-info__bar">
        <div className="detailed-info__goback" onClick={goBack}>
          <LongLogo /> <span>К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ</span>
        </div>
        <div className="detailed-info__buttons">
          <LinkedLogo onClick={copyLink} />
          <RotationLogo onClick={reloadPage} />
          <DeleteLogo onClick={() => setModalIsOpen(true)} />
        </div>
      </div>
      <div className="detailed-info__container">
        <div className="detailed-info__head">
          {isEditTitle ? (
            <>
              <Input
                text="Короткое наименование"
                initialValue={data.shortName}
              />{" "}
              <SaveLogo />
            </>
          ) : (
            <>
              <h2 className="detailed-info__title">{data.shortName}</h2>{" "}
              <EditButton
                edit={() => {
                  setIsEditTitle(true);
                }}
              />
            </>
          )}
        </div>

        <div className="detailed-info__company">
          <div className="detailed-info__head">
            <h3 className="detailed-info__section-title">Общая информация</h3>{" "}
            <EditButton
              edit={() => {
                setIsEditInfo(true);
              }}
            />
          </div>

          {isEditInfo ? (
            <Input text="Полное название" initialValue={data.name} />
          ) : (
            <>
              <h4 className="detailed-info__label">Полное название:</h4>
              <span>{data.name}</span>
            </>
          )}
          <br />
          {isEditInfo ? (
            <>
              <Input text="Номер договора" initialValue={data.contract.no} />
              <Input
                text="Дата договора"
                initialValue={data.contract.issue_date}
              />
            </>
          ) : (
            <>
              <h4 className="detailed-info__label">Договор:</h4>
              <span>
                {data.contract.no} от{" "}
                {moment(data.contract.issue_date).format("DD.MM.YYYY")}
              </span>
            </>
          )}
          <br />

          {isEditInfo ? (
            <Input text="Форма" initialValue={data.businessEntity} />
          ) : (
            <>
              <h4 className="detailed-info__label">Форма:</h4>
              <span>{data.businessEntity}</span>
            </>
          )}
          <br />

          {isEditInfo ? (
            <Input text="Тип" initialValue={data.type} />
          ) : (
            <>
              <h4 className="detailed-info__label">Тип:</h4>
              {data.type.map((item: string) => (
                <span>{item === "agent" ? "Агент" : "Подрядчик"}</span>
              ))}
            </>
          )}
        </div>
        <div className="border"></div>
        <div className="detailed-info__contact">
          <div className="detailed-info__head">
            <h3 className="detailed-info__section-title">КОНТАКТНЫЕ ДАННЫЕ</h3>{" "}
            <EditButton
              edit={() => {
                setIsEditContacts(true);
              }}
            />
          </div>
          {isEditContacts ? (
            <>
              <Input text="Фамилия" initialValue={dataContacts.lastname} />
              <Input text="Имя" initialValue={dataContacts.firstname} />
              <Input text="Отчество" initialValue={dataContacts.patronymic} />
            </>
          ) : (
            <>
              <h4 className="detailed-info__label">ФИО:</h4>
              <span>
                {dataContacts.lastname} {dataContacts.firstname}
                {dataContacts.patronymic}
              </span>
            </>
          )}
          <br />

          {isEditContacts ? (
            <Input text="Телефон:" initialValue={dataContacts.phone} />
          ) : (
            <>
              <h4 className="detailed-info__label">Телефон:</h4>
              <span>{dataContacts.phone}</span>
            </>
          )}
          <br />

          {isEditContacts ? (
            <Input text="Эл. почта:" initialValue={dataContacts.email} />
          ) : (
            <>
              <h4 className="detailed-info__label">Эл. почта:</h4>
              <span>{dataContacts.email}</span>
            </>
          )}
        </div>
        <div className="border"></div>
        <div className="detailed-info__photo">
          <h3 className="detailed-info__section-title">ПРИЛОЖЕННЫЕ ФОТО</h3>
          <Button name="ДОБАВИТЬ ИЗОБРАЖЕНИЕ" />
        </div>
        <div className="border"></div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Удалить карточку"
          className="modal"
        >
          <h2>Удалить карточку</h2>
          <div>Отправить карточку организации в архив?</div>
          <div className="button-container">
            <button onClick={() => setModalIsOpen(false)}>ОТМЕНА</button>
            <button onClick={deleteItem}>УДАЛИТЬ</button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DetailedInfo;
