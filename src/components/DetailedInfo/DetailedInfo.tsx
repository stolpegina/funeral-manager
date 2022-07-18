import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as LinkedLogo } from "../../assets/Linked.svg";
import { ReactComponent as RotationLogo } from "../../assets/Rotation.svg";
import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";
import { ReactComponent as LongLogo } from "../../assets/Long.svg";
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

import Title from "./components/Title/Title";
import CommonInfo from "./components/CommonInfo/CommonInfo";
import Contacts from "./components/Contacts/Contacts";
import Photos from "./components/Photos/Photos";

import "./DetailedInfo.styles.scss";

const companyId = 12;

const DetailedInfo = () => {
  const [companyData, setCompanyData] = useState<any>(null);
  const [contactsData, setContactsData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCompany(companyId).then((resp) => resp.json());
      setCompanyData(data);

      const dataContacts = await getContacts(data.contactId).then(
        (resp) => resp.json()
      );
      setContactsData(dataContacts);
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

  const deleteItem = () => {
    deleteCompany(companyId);
    setModalIsOpen(false);

    navigate("/companies");
  };

  const onCompanyFormSave = () => {
    const sendData = {
      name: companyData.name,
      shortName: companyData.shortName,
      businessEntity: companyData.businessEntity,
      contract: {
        no: companyData.contract.no,
        issue_date: companyData.contract.issue_date,
      },
      type: companyData.type,
    };

    updateCompany(companyId, sendData);
  };

  const onContactsFormSave = () => {
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
          onChange={(shortName) => {
            setCompanyData((prevDataState: any) => ({
              ...prevDataState,
              shortName,
            }));
          }}
          onSave={onCompanyFormSave}
        />

        <CommonInfo
          data={companyData}
          onChange={(field, value) =>
            setCompanyData((prevDataState: any) => ({
              ...prevDataState,
              [field]: value,
            }))
          }
          onSave={onCompanyFormSave}
        />

        <div className="border" />

        <div className="detailed-info__section">
          <Contacts
            data={contactsData}
            onChange={(field, value) =>
              setContactsData((prevDataContacts: any) => ({
                ...prevDataContacts,
                [field]: value,
              }))
            }
            onSave={onContactsFormSave}
          />
          <br />
        </div>
        <div className="border"></div>
        <div className="detailed-info__section">
          <Photos
            images={companyData.photos}
            onUpload={(files) => {
              Promise.all(
                files.map((file) =>
                  addImage(companyId, file).then((response) => response.json())
                )
              ).then((photos) => {
                setCompanyData((prevCompanyDataState: any) => ({
                  ...prevCompanyDataState,
                  photos: [...prevCompanyDataState.photos, ...photos],
                }));
              });
            }}
            onRemove={(filename) => {
              deleteImage(companyId, filename).then(() => {
                setCompanyData((prevCompanyDataState: any) => ({
                  ...prevCompanyDataState,
                  photos: companyData.photos.filter(
                    (photo: any) => photo.name !== filename
                  ),
                }));
              });
            }}
          />
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
