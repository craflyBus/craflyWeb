import React from "react";
import {
  RequestDroneContainer,
  Title,
  MainTitle,
  SubTitle,
  Section,
  SectionTitle,
  SectionSubTitle,
} from "./style.js";
import PickContainer from "components/pickContainer/button/index.js";

import materials from "./pickList/materials.json";
import sizes from "./pickList/sizes.json";
import speed from "./pickList/speed.json";
import powerSources from "./pickList/powerSources.json";
import battery from "./pickList/battery.json";
import batteryUnit from "./pickList/batteryUnit.json";
import { PickSliderContainer } from "components/pickContainer/slider/index.js";
import { ImageContainer } from "components/pickContainer/image/index.js";

const RequestDrone = () => {
  return (
    <RequestDroneContainer>
      <Title>
        <MainTitle>드론 제작 의뢰서</MainTitle>
        <SubTitle>Drone Production Request Form</SubTitle>
        <Section>
          <SectionTitle>주 재질</SectionTitle>
          <SectionSubTitle>Main Material</SectionSubTitle>
          {PickContainer(materials)}
        </Section>
        <Section>
          <SectionTitle>동력원</SectionTitle>
          <SectionSubTitle>Power Source</SectionSubTitle>
          {PickContainer(powerSources)}
        </Section>
        <Section>
          <SectionTitle>기체 크기</SectionTitle>
          <SectionSubTitle>Fuselage Size</SectionSubTitle>
          {PickSliderContainer("cm", "150px", sizes, 30, 60, 30, 1, (size) => {
            return parseInt(size < 41 ? 0 : size < 51 ? 1 : 2);
          })}
        </Section>
        <Section>
          <SectionTitle>예상 실속 속도</SectionTitle>
          <SectionSubTitle>Stall Speed</SectionSubTitle>
          {PickSliderContainer(
            "m/s",
            "220px",
            speed,
            50,
            200,
            50,
            10,
            (size) => {
              return 0;
            }
          )}
        </Section>
        <Section>
          <SectionTitle>배터리</SectionTitle>
          <SectionSubTitle>battery</SectionSubTitle>
          {PickContainer(battery)}
        </Section>
        <Section>
          <SectionTitle>배터리 커넥터</SectionTitle>
          <SectionSubTitle>battery Connector</SectionSubTitle>
          {PickContainer(batteryUnit)}
        </Section>
        <Section>
          <SectionTitle>예시 사진</SectionTitle>
          <SectionSubTitle>Example Picture</SectionSubTitle>
          {ImageContainer()}
        </Section>
      </Title>
    </RequestDroneContainer>
  );
};

export default RequestDrone;
