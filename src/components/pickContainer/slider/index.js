import { useState } from "react";
import {
  SizeTextBox,
  IconJump,
  Option,
  SizeText,
  Slider,
  SliderBox,
  IconBox,
} from "./style.js";

import Tooltip from "components/tooltip/index.js";

import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";

export const PickSliderContainer = (unit, list) => {
  const [size, setSize] = useState(30);

  const min = 30,
    max = 60;

  const getIndex = (size) => {
    return parseInt(size < 41 ? 0 : size < 51 ? 1 : 2);
  };

  return (
    <div>
      <SizeTextBox>
        <SizeText className="value">{size}</SizeText>
        <SizeText>{unit} [</SizeText>
        <SizeText>{list[getIndex(size)].name}</SizeText>
        <SizeText>]</SizeText>
        <IconJump />

        <IconBox>
          <Tooltip
            width={"100px"}
            height={"40px"}
            option={list[getIndex(size)]}
          >
            <IconImg fill="#404040" width={"30px"} height={"30px"} />
          </Tooltip>
        </IconBox>
      </SizeTextBox>

      <SliderBox>
        <Slider
          id="slider"
          type="range"
          min={min}
          max={max}
          list="tickmarks"
          defaultValue={size}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <datalist id="tickmarks">
          <Option value="30">30</Option>
          <Option value="40">40</Option>
          <Option value="50">50</Option>
          <Option value="60">60</Option>
        </datalist>
      </SliderBox>
    </div>
  );
};

export default PickSliderContainer;
