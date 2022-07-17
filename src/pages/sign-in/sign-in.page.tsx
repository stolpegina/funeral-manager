import React, { useState } from "react";
import { auth } from "../../api";
import Input from "../../ui-components/Input/Input";

const SignIn = () => {
  const [username, setusername] = useState('')
  const saveToken = (token: any) => {
    sessionStorage.setItem("tokenData", token);
  };

  const resp = auth('username');

  resp.then((res) => {
    if (res.status === 200) {
      const tokenData = res.headers.get("Authorization");
      console.log(tokenData);
      
      saveToken(tokenData);
      return Promise.resolve();
    }
    return Promise.reject();
  });
  return (
    <form>
      <Input text="Логин" initialValue=''/>
    </form>
  );
};

export default SignIn;
