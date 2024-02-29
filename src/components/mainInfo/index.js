import { useNavigate } from "react-router-dom";
import {
  Section,
  InfoBox,
  SliceBar,
  Title,
  SubTitle,
  Button,
} from "./style.js";

const TopInfo = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Section className="first">
        <InfoBox>
          <Title className="first">내가 원하던 드론을 만들다</Title>
          <SubTitle className="first">
            현재 x개의 드론이 작업 대기중입니다
          </SubTitle>
          <SliceBar className="first" />
          <Button className="first" onClick={() => navigate("/request/drone")}>
            커스텀 드론 견적받기
          </Button>
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
      <Section className="third">
        <InfoBox>
          <Title className="third">지속적인 커스터마이징</Title>
          <SubTitle className="third">
            구매 후에도 1년간 A/S가 가능하며
            <br />
            메크로, 기능등 추가적인 소프트웨어 업데이트를 요청할 수 있습니다.
          </SubTitle>
          <SliceBar className="third" />
          <Button className="third">업그레이드 의뢰하기</Button>
        </InfoBox>
      </Section>
    </div>
  );
};

export default TopInfo;
