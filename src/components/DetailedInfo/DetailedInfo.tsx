import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../ui-components/Input/Input";
import "./DetailedInfo.styles.scss";
import { ReactComponent as LinkedLogo } from "../../assets/Linked.svg";
import { ReactComponent as RotationLogo } from "../../assets/Rotation.svg";
import { ReactComponent as DeleteLogo } from "../../assets/Delete.svg";
import { ReactComponent as LongLogo } from "../../assets/Long.svg";
import Modal from "react-modal";
import {
  deleteCompany,
  getCompany,
  getContacts,
  updateCompany,
  updateContacts,
} from "../../api";
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

  const deleteItem = () => {
    deleteCompany("12");
    setModalIsOpen(false);

    navigate("/companies");
  };

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
                value={data.shortName}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    shortName: e.target.value,
                  })
                }
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

        {isEditInfo ? (
          <div className="detailed-info__company">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const sendData = {
                  name: data.name,
                  shortName: data.shortName,
                  businessEntity: data.businessEntity,
                  contract: {
                    no: data.contract.no,
                    issue_date: data.contract.issue_date,
                  },
                  type: data.type,
                };

                updateCompany("12", sendData);
                setIsEditInfo(false);
              }}
            >
              <div className="detailed-info__head">
                <h3 className="detailed-info__section-title">
                  ОБЩАЯ ИНФОРМАЦИЯ
                </h3>{" "}
                <button type="submit">
                  <SaveLogo />
                </button>
              </div>

              <Input
                text="Полное название"
                value={data.name}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    name: e.target.value,
                  })
                }
              />
              <Input
                text="Номер договора"
                value={data.contract.no}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    contract: { ...data.contract, no: e.target.value },
                  })
                }
              />
              <Input
                text="Дата договора"
                value={data.contract.issue_date}
                // date={true}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    contract: { ...data.contract, issue_date: e.target.value },
                  })
                }
              />
              <Input
                text="Форма"
                value={data.businessEntity}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    businessEntity: e.target.value,
                  })
                }
              />
              <Input
                text="Тип"
                value={data.type}
                onChange={(e: any) =>
                  setData({
                    ...data,
                    type: e.target.value,
                  })
                }
              />
            </form>
          </div>
        ) : (
          <div className="detailed-info__company">
            <div className="detailed-info__head">
              <h3 className="detailed-info__section-title">ОБЩАЯ ИНФОРМАЦИЯ</h3>{" "}
              <EditButton
                edit={() => {
                  setIsEditInfo(true);
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
        )}

        <div className="border"></div>
        <div className="detailed-info__contact">
          {isEditContacts ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const sendData = {
                  lastname: dataContacts.lastname,
                  firstname: dataContacts.firstname,
                  patronymic: dataContacts.patronymic,
                  phone: dataContacts.phone,
                  email: dataContacts.email,
                };

                updateContacts("16", sendData);
                setIsEditContacts(false);
              }}
            >
              <div className="detailed-info__head">
                <h3 className="detailed-info__section-title">
                  КОНТАКТНЫЕ ДАННЫЕ
                </h3>{" "}
                <button type="submit">
                  <SaveLogo />
                </button>
              </div>
              <Input
                text="Фамилия"
                value={dataContacts.lastname}
                onChange={(e: any) =>
                  setDataContacts({
                    ...dataContacts,
                    lastname: e.target.value,
                  })
                }
              />
              <Input
                text="Имя"
                value={dataContacts.firstname}
                onChange={(e: any) =>
                  setDataContacts({
                    ...dataContacts,
                    firstname: e.target.value,
                  })
                }
              />
              <Input
                text="Отчество"
                value={dataContacts.patronymic}
                onChange={(e: any) =>
                  setDataContacts({
                    ...dataContacts,
                    patronymic: e.target.value,
                  })
                }
              />
              <Input
                text="Телефон:"
                value={dataContacts.phone}
                onChange={(e: any) =>
                  setDataContacts({
                    ...dataContacts,
                    phone: e.target.value,
                  })
                }
              />
              <Input
                text="Эл. почта:"
                value={dataContacts.email}
                onChange={(e: any) =>
                  setDataContacts({
                    ...dataContacts,
                    email: e.target.value,
                  })
                }
              />
            </form>
          ) : (
            <>
              <div className="detailed-info__head">
                <h3 className="detailed-info__section-title">
                  КОНТАКТНЫЕ ДАННЫЕ
                </h3>{" "}
                <EditButton
                  edit={() => {
                    setIsEditContacts(true);
                  }}
                />
              </div>
              <h4 className="detailed-info__label">ФИО:</h4>
              <span>
                {dataContacts.lastname} {dataContacts.firstname}
                {dataContacts.patronymic}
              </span>
              <h4 className="detailed-info__label">Телефон:</h4>
              <span>{dataContacts.phone}</span>
              <h4 className="detailed-info__label">Эл. почта:</h4>
              <span>{dataContacts.email}</span>
            </>
          )}
          <br />
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
