import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../api";
import Input from "../../ui-components/Input/Input";

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
    <form onSubmit={onSubmit}>
      <Input
        text="Логин"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit">Войти</button>
    </form>
  );
};

export default SignIn;
