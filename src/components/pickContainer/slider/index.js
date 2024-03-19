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

export const PickSliderContainer = (
  unit,
  tooltipWeight,
  list,
  min,
  max,
  defaultValue,
  step,
  callback
) => {
  const [size, setSize] = useState(defaultValue);

  const generateOptions = (min, max, step) => {
    const options = [];
    for (let i = min; i <= max; i += step * 5) {
      options.push(<Option>{i}</Option>);
    }
    return options;
  };

  return (
    <div>
      <SizeTextBox>
        <SizeText className="value">{size}</SizeText>
        <SizeText>{unit} [</SizeText>
        <SizeText>{list[callback(size)].name}</SizeText>
        <SizeText>]</SizeText>
        <IconJump />

        <IconBox>
          <Tooltip
            width={tooltipWeight}
            height={"40px"}
            option={list[callback(size)]}
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
          step={step}
          list="tickmarks"
          defaultValue={defaultValue}
          onChange={(e) => {
            setSize(e.target.value);
          }}
        />
        <datalist id="tickmarks">{generateOptions(min, max, step)}</datalist>
      </SliderBox>
    </div>
  );
};

export default PickSliderContainer;
