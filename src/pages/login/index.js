import LoginForm from "components/login/index.js";
import Layout from "components/layout/index.js";

const Login = () => {
  return (
    <div>
      <Layout>{<LoginForm />}</Layout>
    </div>
  );
};

export default Login;
