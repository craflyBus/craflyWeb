import { Section, Title, SubTitle, Button } from "./style.js";

const TopInfo = () => {
  return (
    <div>
      <Section className="first">
        <Title>내가 원하는 디자인</Title>
        <SubTitle>내가 원하는 디자인</SubTitle>
        <Button>무료로 드론 견적받기</Button>
      </Section>
      <Section className="second"></Section>
    </div>
  );
};

export default TopInfo;
