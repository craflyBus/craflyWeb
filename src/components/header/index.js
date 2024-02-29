import { useNavigate } from "react-router-dom";
import { HeaderContainer, Logo, Contents, Navigation } from "./style.js";

const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Contents>
        <Logo>logo</Logo>
        <Navigation>
          <ul>
            <li>사업 정보</li>
            <li>의뢰</li>
            <li>문의</li>
            <li onClick={() => navigate("/login")}>로그인</li>
          </ul>
        </Navigation>
      </Contents>
    </HeaderContainer>
  );
};

export default Header;
