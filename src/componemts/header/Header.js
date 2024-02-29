import { HeaderContainer, Contents, Navigation } from "./style.js";

const Header = () => {
  return (
    <HeaderContainer>
      <Contents>
        <div>logo</div>
        <Navigation>
          <ul>
            <li>사업 정보</li>
            <li>드론 의뢰</li>
            <li>업그레이드 의뢰</li>
            <li>문의</li>
          </ul>
        </Navigation>
      </Contents>
    </HeaderContainer>
  );
};

export default Header;
