import React, { useState } from "react";
import {
  RequestDroneContainer,
  Title,
  MainTitle,
  SubTitle,
  Section,
  SectionTitle,
  SectionSubTitle,
} from "./style.js";
import PickContainer from "@components/pickContainer/button/index.js";

import types from "./pickList/types.json";
import materials from "./pickList/materials.json";
import sizes from "./pickList/sizes.json";
import speeds from "./pickList/speeds.json";
import powerSources from "./pickList/powerSources.json";
import batterys from "./pickList/batterys.json";
import batteryUnits from "./pickList/batteryUnits.json";
import { PickSliderContainer } from "@components/pickContainer/slider/index.js";
import { ImageContainer } from "@components/pickContainer/image/index.js";
import FunctionContainer from "@components/pickContainer/input/index.js";

const RequestDrone = () => {
  const [type, setType] = useState(null);
  const [material, setMaterial] = useState(false);
  const [powerSource, setPowerSource] = useState(false);
  const [fuselageSize, setFuselageSize] = useState(false);
  const [stallSpeed, setStallSpeed] = useState(false);
  const [battery, setBattery] = useState(false);
  const [batteryConnecter, setBatteryConnecter] = useState(false);
  const [examplePicture, setExamplePicture] = useState(false);

  const handleSetTypeValue = (value) => {
    setType(value);
  };

  return (
    <RequestDroneContainer>
      <Title>
        <MainTitle>드론 제작 의뢰서</MainTitle>
        <SubTitle>Drone Production Request Form</SubTitle>
        <Section>
          <SectionTitle>종류</SectionTitle>
          <SectionSubTitle>Type</SectionSubTitle>
          {PickContainer(types, type, handleSetTypeValue)}
        </Section>
        <Section>
          <SectionTitle>주 재질</SectionTitle>
          <SectionSubTitle>Main Material</SectionSubTitle>
          {PickContainer(materials, material, setMaterial)}
        </Section>
        <Section>
          <SectionTitle>동력원</SectionTitle>
          <SectionSubTitle>Power Source</SectionSubTitle>
          {PickContainer(powerSources, powerSource, setPowerSource)}
        </Section>
        <Section>
          <SectionTitle>기체 크기</SectionTitle>
          <SectionSubTitle>Fuselage Size</SectionSubTitle>
          {PickSliderContainer(
            "cm",
            "150px",
            sizes,
            30,
            100,
            30,
            1,
            (size) => {
              return parseInt(
                size < 46 ? 0 : size < 61 ? 1 : size < 76 ? 2 : 3
              );
            },
            fuselageSize,
            setFuselageSize
          )}
        </Section>
        {type === "airplane" && (
          <Section>
            <SectionTitle>예상 실속 속도</SectionTitle>
            <SectionSubTitle>Stall Speed</SectionSubTitle>
            {PickSliderContainer(
              "m/s",
              "220px",
              speeds,
              50,
              200,
              50,
              10,
              (size) => {
                return 0;
              },
              stallSpeed,
              setStallSpeed
            )}
          </Section>
        )}
        <Section>
          <SectionTitle>배터리</SectionTitle>
          <SectionSubTitle>battery</SectionSubTitle>
          {PickContainer(batterys, battery, setBattery)}
        </Section>
        <Section>
          <SectionTitle>배터리 커넥터</SectionTitle>
          <SectionSubTitle>battery Connector</SectionSubTitle>
          {PickContainer(batteryUnits, batteryConnecter, setBatteryConnecter)}
        </Section>
        <Section>
          <SectionTitle>예시 사진</SectionTitle>
          <SectionSubTitle>Example Picture</SectionSubTitle>
          {ImageContainer(examplePicture, setExamplePicture)}
        </Section>
        <Section>
          <SectionTitle>기능 설정</SectionTitle>
          <SectionSubTitle>Set Function</SectionSubTitle>
          <FunctionContainer></FunctionContainer>
        </Section>
      </Title>
    </RequestDroneContainer>
  );
};

export default RequestDrone;
