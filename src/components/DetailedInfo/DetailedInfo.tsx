import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui-components/Input/Input";
import "./DetailedInfo.styles.scss";
import { ReactComponent as LinkedLogo } from "../../assets/Linked.svg";
import { ReactComponent as RotationLogo } from "../../assets/Rotation.svg";
import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";
import Modal from "react-modal";

const data = {
  id: "12",
  contactId: "16",
  name: "ООО Фирма «Перспективные захоронения»",
  shortName: "Перспективные захоронения",
  businessEntity: "ООО",
  contract: {
    no: "12345",
    issue_date: "2015-03-12T00:00:00Z",
  },
  type: ["agent", "contractor"],
  status: "active",
  photos: [
    {
      name: "0b8fc462dcabf7610a91.jpg",
      filepath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91.jpg",
      thumbpath: "http://135.181.35.61:2112/0b8fc462dcabf7610a91_160x160.jpg",
    },
  ],
  createdAt: "2020-11-21T08:03:00Z",
  updatedAt: "2020-11-23T09:30:00Z",
};

const dataContacts = {
  id: "16",
  lastname: "Григорьев",
  firstname: "Сергей",
  patronymic: "Петрович",
  phone: "79162165588",
  email: "grigoriev@funeral.com",
  createdAt: "2020-11-21T08:03:26.589Z",
  updatedAt: "2020-11-23T09:30:00Z",
};

const DetailedInfo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  let subtitle: any;
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  const copyLink = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        // Получилось!
      })
      .catch((err) => {
        console.log("Something went wrong", err);
      });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const deleteItem = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="detailed-info">
      <div className="detailed-info__bar">
        <div className="detailed-info__goback" onClick={goBack}>
          К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
        </div>
        <div className="detailed-info__buttons">
          <LinkedLogo onClick={copyLink} />
          <RotationLogo onClick={reloadPage} />
          <DeleteLogo onClick={deleteItem} />
        </div>
      </div>
      <h2>{data.shortName}</h2>
      <div className="detailed-info__company">
        <h3>Общая информация</h3>
        <h4>Полное название:</h4>
        <span>{data.name}</span>
        <br />
        <h4>Договор:</h4>
        <span>
          {data.contract.no} {data.contract.issue_date}
        </span>
        <br />
        <h4>Форма:</h4>
        <span>{data.businessEntity}</span>
        <br />
        <h4>Тип:</h4>
        <span>{data.type}</span>
      </div>

      <div className="border"></div>

      <div className="detailed-info__contact">
        <h3>КОНТАКТНЫЕ ДАННЫЕ</h3>
        <h4>ФИО:</h4>
        <span>
          {dataContacts.lastname} {dataContacts.firstname}
          {dataContacts.patronymic}
        </span>
        <br />
        <h4>Телефон:</h4>
        <span>{dataContacts.phone}</span>
        <br />
        <h4>Эл. почта:</h4>
        <span>{dataContacts.email}</span>
      </div>

      <div className="border"></div>

      <div className="detailed-info__photo">
        <h3>ПРИЛОЖЕННЫЕ ФОТО</h3>
        <button>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Удалить карточку"
        className="modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Удалить карточку</h2>
        <div>Отправить карточку организации в архив?</div>
        <div className="button-container">
          <button onClick={closeModal}>ОТМЕНА</button>
          <button>УДАЛИТЬ</button>
        </div>
      </Modal>
    </div>
  );
};

export default DetailedInfo;
