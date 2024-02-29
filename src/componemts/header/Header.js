import { HeaderContainer, Contents, Navigation } from "./style.js";

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <div>logo</div>
        <Navigation>
          <ul>
            <li>사업 정보</li>
            <li>의뢰</li>
            <li>문의</li>
            <li>로그인</li>
          </ul>
        </Navigation>
      </Contents>
    </HeaderContainer>
  );
};

export default Header;
