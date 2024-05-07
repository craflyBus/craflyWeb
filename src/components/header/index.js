import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { HeaderContainer, Logo, Contents, Navigation } from "./style.js";

import { ReactComponent as LogoImg } from "@assets/images/logo.svg";
import Login from "@components/_modal/login/index.js";

const Header = () => {
  const navigate = useNavigate();

  const [loginOpen, setLoginOpen] = useState(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  return (
    <HeaderContainer>
      <Contents>
        <Logo onClick={() => navigate("/")}>
          <LogoImg height={40} fill="#FFFFFF" />
        </Logo>
        <Navigation>
          <ul>
            <li>사업 정보</li>
            <li>의뢰</li>
            <li>문의</li>
            <li onClick={openLoginModal}>로그인</li>
          </ul>
        </Navigation>
      </Contents>
      <Login isOpen={loginOpen} close={closeLoginModal} />
    </HeaderContainer>
  );
};

export default Header;
