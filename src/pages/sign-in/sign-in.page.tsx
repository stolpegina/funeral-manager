import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api";
import Input from "../../ui-components/Input/Input";

import './sign-in.styles.scss';

const SignIn = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const saveToken = (token: string | null) => {
    sessionStorage.setItem("tokenData", token ?? "");
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    auth(username).then((res) => {
      if (res.status === 200) {
        const tokenData = res.headers.get("Authorization");
        saveToken(tokenData);
        navigate("/companies");
        window.location.reload();
      }
    });
  };

  return (
    <div className="sign-in">
      <form onSubmit={onSubmit}>
        <h2>Введите логин</h2>
        <Input
          text="Логин"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="sign-in__button" type="submit">Войти</button>
      </form>
    </div>
  );
};

export default SignIn;
