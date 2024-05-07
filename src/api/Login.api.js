import axios from "axios";

const LoginAPI = () => {
  const authReq = async (id, password) => {
    try {
      const { data } = axios.post(
        `${process.env.REACT_APP_API_URL}/v1/user/login`,
        {
          id,
          password,
        },
        { withCredentials: true }
      );

      return data;
    } catch (e) {
      console.log(e);
    }
  };

  return { authReq };
};

export default LoginAPI;
