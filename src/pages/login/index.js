import LoginForm from "components/login/index.js";
import Layout from "components/layout/index.js";
import { useEffect } from "react";

const LoginPage = () => {
  useEffect(() => {
    document.title = "Crafly - 로그인";
  });
  return (
    <Layout>
      <LoginForm />
    </Layout>
  );
};

export default LoginPage;
