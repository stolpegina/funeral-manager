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
      <div className="detailed-info__head">
        {isEditTitle ? (
          <>
            <Input text="Короткое наименование" /> <SaveLogo />
          </>
        ) : (
          <>
            <h2>{data.shortName}</h2>{" "}
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
          <h3>Общая информация</h3>{" "}
          <EditButton
            edit={() => {
              setIsEditInfo(true);
            }}
          />
        </div>

        <h4>Полное название:</h4>
        {isEditInfo ? <Input /> : <span>{data.name}</span>}
        <br />
        <h4>Договор:</h4>
        {isEditInfo ? (
          <Input />
        ) : (
          <span>
            {data.contract.no} {data.contract.issue_date}
          </span>
        )}
        <br />
        <h4>Форма:</h4>
        {isEditInfo ? <Input /> : <span>{data.businessEntity}</span>}
        <br />
        <h4>Тип:</h4>
        {isEditInfo ? <Input /> : <span>{data.type}</span>}
      </div>
      <div className="border"></div>
      <div className="detailed-info__contact">
        <div className="detailed-info__head">
          <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>{" "}
          <EditButton
            edit={() => {
              setIsEditContacts(true);
            }}
          />
        </div>
        <h4>ФИО:</h4>
        {isEditContacts ? (
          <Input />
        ) : (
          <span>
            {dataContacts.lastname} {dataContacts.firstname}
            {dataContacts.patronymic}
          </span>
        )}
        <br />
        <h4>Телефон:</h4>
        {isEditContacts ? (
          <Input text="Телефон:" />
        ) : (
          <span>{dataContacts.phone}</span>
        )}
        <br />
        <h4>Эл. почта:</h4>
        {isEditContacts ? (
          <Input text="Эл. почта:" />
        ) : (
          <span>{dataContacts.email}</span>
        )}
      </div>
      <div className="border"></div>
      <div className="detailed-info__photo">
        <h3>ПРИЛОЖЕННЫЕ ФОТО</h3>
        <button>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</button>
      </div>
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
  );
};

export default DetailedInfo;
