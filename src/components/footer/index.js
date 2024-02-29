import { useNavigate } from "react-router-dom";
import { FooterContainer, Contents, Info, Navigation, Logo } from "./style.js";

import { ReactComponent as LogoImg } from "../../assets/images/logo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterContainer>
      <Contents>
        <Logo>
          <LogoImg fill="#FFFFFF" />
        </Logo>
        <Info>
          <h5>Copyright© 2024 Crafly. All Rights Reserved.</h5>
        </Info>
        <Navigation>
          <ul>
            <li>사업 정보</li>
            <li>개인정보 처리방침</li>
            <li>고객센터</li>
          </ul>
        </Navigation>
      </Contents>
    </FooterContainer>
  );
};

export default Footer;
