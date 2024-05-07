import { SignInContainer, Title, MainTitle, SubTitle } from "./style.js";
import Section from "./section/index.js";

const SignIn = () => {
  const { Auth, KakaoAuth, User } = Section();
  return (
    <SignInContainer>
      <Title>
        <MainTitle>드론 제작 의뢰서</MainTitle>
        <SubTitle>Drone Production Request Form</SubTitle>
        <Auth />
        <KakaoAuth />
        <User />
      </Title>
    </SignInContainer>
  );
};

export default SignIn;
