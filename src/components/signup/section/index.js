import { SectionContainer, SectionTitle, SectionSubTitle } from "./style.js";

export const Section = () => {
  const Auth = () => {
    return (
      <SectionContainer>
        <SectionTitle>유저 정보</SectionTitle>
        <SectionSubTitle>Type</SectionSubTitle>
      </SectionContainer>
    );
  };
  const KakaoAuth = () => {
    return (
      <SectionContainer>
        <SectionTitle>유저 정보</SectionTitle>
        <SectionSubTitle>Type</SectionSubTitle>
      </SectionContainer>
    );
  };
  const User = () => {
    return (
      <SectionContainer>
        <SectionTitle>유저 정보</SectionTitle>
        <SectionSubTitle>Type</SectionSubTitle>
      </SectionContainer>
    );
  };

  return { Auth, KakaoAuth, User };
};

export default Section;
