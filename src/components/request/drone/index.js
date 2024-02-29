import React, { useEffect, useState } from "react";
import {
  RequestDroneContainer,
  Title,
  MainTitle,
  SubTitle,
  Section,
  SectionTitle,
  SectionSubTitle,
  PickBox,
  Pick,
  PickTitle,
  PickJump,
} from "./style.js";
import Tooltip from "components/tooltip/index.js";

const RequestDrone = () => {
  const materials = [
    {
      name: "PLA",
      info: "저렴하고 접하기 쉬운 기본적인 필라멘트 소재입니다.",
      printer: "FDM",
    },
    {
      name: "ABS",
      info: "PLA보다 내구성이 더욱 뛰어난 필라멘트 소재입니다.",
      printer: "FDM",
    },
    {
      name: "PETG",
      info: "PLA와 ABS의 중간급 필라멘트 소재입니다.",
      printer: "FDM",
    },
    {
      name: "Standard Resin",
      info: `가장 기본적인 레진 소재입니다.\n우수한 품질을 자랑합니다.`,
      printer: "SLA",
    },
    {
      name: "Tough Resin",
      info: "가장 내구성이 뛰어난 레진 소재입니다.\n강도와 유연함이 균형잡혔으며,\n마모, 일그러짐, 충격등에 강합니다.",
      printer: "SLA",
    },
    {
      name: "Flexible Resin",
      info: "실리콘, 우레탄, 고무와 같이 연성이 높은 레진 소재입니다.\n일그러짐, 충격등에 유연하게 대처합니다.",
      printer: "SLA",
    },
    {
      name: "Rigid Resin",
      info: "매우 높은 강도를 가지고 있는 레진 소재입니다.\n열, 충격등에 의해 변형되지 않습니다.",
      printer: "SLA",
    },
  ];

  const [pickMaterial, setPickMaterial] = useState(false);

  return (
    <RequestDroneContainer>
      <Title>
        <MainTitle>드론 제작 의뢰서</MainTitle>
        <SubTitle>Drone Production Request Form</SubTitle>

        <Section>
          <SectionTitle>주 재질</SectionTitle>
          <SectionSubTitle>Main Material</SectionSubTitle>
          <PickBox>
            {materials.map((option, index) => (
              <PickJump>
                <Tooltip
                  width={"300px"}
                  height={"40px"}
                  info={option.info}
                  printer={option.printer}
                >
                  <Pick
                    key={index}
                    pick={pickMaterial === option.name ? "pick" : ""}
                    onClick={() => {
                      setPickMaterial(option.name);
                      console.log(option.name);
                    }}
                  >
                    <PickTitle
                      pick={pickMaterial === option.name ? "pick" : ""}
                    >
                      {option.name}
                    </PickTitle>
                  </Pick>
                </Tooltip>
              </PickJump>
            ))}
          </PickBox>
        </Section>
      </Title>
    </RequestDroneContainer>
  );
};

export default RequestDrone;
