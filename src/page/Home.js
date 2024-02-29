import TopInfo from "src/componemts/topInfo/TopInfo.js";
import Layout from "./../componemts/layout/Layout.js";

const Home = () => {
  return (
    <div>
      <Layout>{<TopInfo />}</Layout>
    </div>
  );
};

export default Home;
