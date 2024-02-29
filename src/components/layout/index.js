import Header from "../header/index";
import Footer from "../footer/index";
import { Global } from "./style";

const Layout = (props) => {
  return (
    <Global>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </Global>
  );
};

export default Layout;
