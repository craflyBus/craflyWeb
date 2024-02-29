import {
  Section,
  InfoBox,
  SliceBar,
  Title,
  SubTitle,
  Button,
} from "./style.js";

const TopInfo = () => {
  return (
    <div>
      <Section className="first">
        <InfoBox>
          <Title className="first">내가 원하던 드론을 만들다</Title>
          <SubTitle className="first">
            현재 x개의 드론이 작업 대기중입니다
          </SubTitle>
          <SliceBar className="first" />
          <Button className="first">커스텀 드론 견적받기</Button>
        </InfoBox>
      </Section>
      <Section className="second">
        <InfoBox>
          <Title className="second">원하는 소재를 사용하다</Title>
          <SubTitle className="second">
            PLA, ABS, ABS-LIKE 레진, 폴리우레탄등 x개의
            <br />
            다양한 소재를 사용 가능합니다.
          </SubTitle>
          <SliceBar className="second" />
          <Button className="second">소재 확인하기</Button>
        </InfoBox>
      </Section>
    </div>
  );
};

export default TopInfo;
