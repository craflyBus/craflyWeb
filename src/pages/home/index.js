import TopInfo from "components/mainInfo/index.js";
import Layout from "components/layout/index.js";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    document.title = "Crafly - 드론 제작 의뢰 사이트";
  });
  return <Layout>{<TopInfo />}</Layout>;
};

export default HomePage;
