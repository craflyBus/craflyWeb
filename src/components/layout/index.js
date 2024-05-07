import Header from "../header/index";
import Footer from "../footer/index";
import { Global } from "./style";
import { ToastProvider } from "@components/toast/index";

const Layout = (props) => {
  return (
    <Global>
      <ToastProvider>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </ToastProvider>
    </Global>
  );
};

export default Layout;
