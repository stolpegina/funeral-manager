import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import {
  addImage,
  deleteCompany,
  deleteImage,
  getCompany,
  getContacts,
  updateCompany,
  updateContacts,
} from "../../api";
import { Company } from "../../types/company";
import { Contact } from "../../types/contact";

import { ReactComponent as LinkedLogo } from "../../assets/Linked.svg";
import { ReactComponent as RotationLogo } from "../../assets/Rotation.svg";
import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";
import { ReactComponent as LongLogo } from "../../assets/Long.svg";

import Title from "./components/Title/Title";
import CommonInfo from "./components/CommonInfo/CommonInfo";
import Contacts from "./components/Contacts/Contacts";
import Photos from "./components/Photos/Photos";

import "./DetailedInfo.styles.scss";

const companyId = "12";

const DetailedInfo = () => {
  const [companyData, setCompanyData] = useState<Company | null>(null);
  const [contactsData, setContactsData] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompany(companyId).then((resp) => resp.json());
      setCompanyData(data);

      const dataContacts = await getContacts(data.contactId).then((resp) =>
        resp.json()
      );
      setContactsData(dataContacts);
    };
    fetchData();
  }, []);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const navigate = useNavigate();

  const goBack = () => navigate('/companies');

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).catch((err) => {
      console.log("Something went wrong", err);
    });
  };

  const reloadPage = () => {
    window.location.reload();
  };

  const onCompanyRemove = () => {
    deleteCompany(companyId);
    setModalIsOpen(false);

    navigate("/companies");
  };

  const onTitleChange = (shortName: string) => {
    setCompanyData((prevDataState) =>
      prevDataState ? { ...prevDataState, shortName } : null
    );
  };

  const onCommonInfoChange = (field: string, value: unknown) =>
    setCompanyData((prevDataState) =>
      prevDataState ? { ...prevDataState, [field]: value } : null
    );

  const onContactsChange = (field: string, value: unknown) =>
    setContactsData((prevContactsDataState) =>
      prevContactsDataState
        ? { ...prevContactsDataState, [field]: value }
        : null
    );

  const onImageUpload = (files: File[]) => {
    Promise.all(
      files.map((file) =>
        addImage(companyId, file).then((response) => response.json())
      )
    ).then((photos) => {
      setCompanyData((prevCompanyDataState) =>
        prevCompanyDataState
          ? {
              ...prevCompanyDataState,
              photos: [...prevCompanyDataState.photos, ...photos],
            }
          : null
      );
    });
  };

  const onImageRemove = (filename: string) => {
    if (!companyData) return;

    deleteImage(companyId, filename).then(() => {
      setCompanyData((prevCompanyDataState) =>
        prevCompanyDataState
          ? {
              ...prevCompanyDataState,
              photos: companyData.photos.filter(
                (photo) => photo.name !== filename
              ),
            }
          : null
      );
    });
  };

  const onCompanyFormSave = () => {
    if (!companyData) return;

    const sendData = {
      name: companyData.name,
      shortName: companyData.shortName,
      businessEntity: companyData.businessEntity,
      type: companyData.type,
    };

    updateCompany(companyId, sendData);
  };

  const onContactsFormSave = () => {
    if (!companyData || !contactsData) return;

    const sendData = {
      lastname: contactsData.lastname,
      firstname: contactsData.firstname,
      patronymic: contactsData.patronymic,
      phone: contactsData.phone,
      email: contactsData.email,
    };

    updateContacts(companyData.contactId, sendData);
  };

  if (!companyData || !contactsData)
    return (
      <div className="detailed-info">
        <div className="spinner"></div>
      </div>
    );

  return (
    <div className="detailed-info">
      <div className="detailed-info__bar">
        <div className="detailed-info__goback" onClick={goBack}>
          <LongLogo />{" "}
          <span className="detailed-info__goback-title">
            К СПИСКУ ЮРИДИЧЕСКИХ ЛИЦ
          </span>
        </div>
        <div className="detailed-info__buttons">
          <LinkedLogo onClick={copyLink} />
          <RotationLogo onClick={reloadPage} />
          <DeleteLogo onClick={() => setModalIsOpen(true)} />
        </div>
      </div>
      <div className="detailed-info__container">
        <Title
          name={companyData.shortName}
          onChange={onTitleChange}
          onSave={onCompanyFormSave}
        />

        <CommonInfo
          data={companyData}
          onChange={onCommonInfoChange}
          onSave={onCompanyFormSave}
        />

        <div className="border" />

        <div className="detailed-info__section">
          <Contacts
            data={contactsData}
            onChange={onContactsChange}
            onSave={onContactsFormSave}
          />
        </div>
        <div className="border"></div>
        <div className="detailed-info__section">
          <Photos
            images={companyData.photos}
            onUpload={onImageUpload}
            onRemove={onImageRemove}
          />
        </div>
        <div className="border"></div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Удалить карточку"
          className="modal"
        >
          <h2 className="modal__title">Удалить карточку</h2>
          <div>Отправить карточку организации в архив?</div>
          <div className="button-container">
            <button
              className="button-container__button"
              onClick={() => setModalIsOpen(false)}
            >
              ОТМЕНА
            </button>
            <button
              className="button-container__button button-container__button_green"
              onClick={onCompanyRemove}
            >
              УДАЛИТЬ
            </button>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default DetailedInfo;
