import SignIn from "@components/signup/index";
import { useEffect } from "react";

const SignInPage = () => {
  useEffect(() => {
    document.title = "Crafly - 회원가입";
  });
  return <SignIn />;
};

export default SignInPage;
