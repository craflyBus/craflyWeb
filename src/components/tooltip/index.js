import React, { useState, useRef } from "react";

import {
  TooltipContainer,
  TooltipBox,
  TooltipText,
  TooltipOutArrow,
  TooltipInArrow,
  About,
} from "./style";

const Tooltip = (props) => {
  const [hoverButton, setHoverButton] = useState(false);
  const [visionStatus, setVisionStatus] = useState(0);
  const timerRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timerRef.current);
    console.log("hover!");
    if (visionStatus === "down") {
      setHoverButton(true);
      setVisionStatus("on");
    } else {
      setVisionStatus("up");
      timerRef.current = setTimeout(() => {
        setHoverButton(true);
        setVisionStatus("on");
      }, 500);
    }
  };

  const handleMouseLeave = () => {
    console.log("leave!");
    setVisionStatus("down");
    setHoverButton(false);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      setVisionStatus("off");
    }, 300);
  };
  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {props.children}
      <TooltipBox height={props.height} width={props.width} hover={hoverButton}>
        <TooltipText>
          <About>설명</About>
          {props.info.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
          {props.printer && (
            <div>
              <About>출력방식</About>
              {props.printer}
            </div>
          )}
        </TooltipText>
        <TooltipOutArrow />
        <TooltipInArrow />
      </TooltipBox>
    </TooltipContainer>
  );
};

export default Tooltip;
