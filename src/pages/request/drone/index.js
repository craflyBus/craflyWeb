import RequestDrone from "components/request/drone/index.js";
import Layout from "components/layout/index.js";
import { useEffect } from "react";

const RequestDronePage = () => {
  useEffect(() => {
    document.title = "Crafly - 의뢰서 편집";
  });
  return <Layout>{<RequestDrone />}</Layout>;
};

export default RequestDronePage;
