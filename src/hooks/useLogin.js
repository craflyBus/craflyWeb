import { useState } from "react";
import LoginAPI from "@api/Login.api";

const useLogin = () => {
  const { authReq } = LoginAPI();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idChange = (e) => {
    setId(e.target.value);
  };
  const pwChange = (e) => {
    setPw(e.target.value);
  };
  const loginSubmit = () => {
    authReq(id, pw)
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { idChange, pwChange, loginSubmit };
};

export default useLogin;
