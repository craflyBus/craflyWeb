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
import { PickSliderContainer } from "components/pickContainer/slider/index.js";

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
          <SectionTitle>기체 크기</SectionTitle>
          <SectionSubTitle>Fuselage Size</SectionSubTitle>
          {PickSliderContainer("cm", sizes)}
        </Section>
      </Title>
    </RequestDroneContainer>
  );
};

export default RequestDrone;
