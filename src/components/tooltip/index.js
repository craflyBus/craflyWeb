import React, { useState, useRef } from "react";

import {
  TooltipContainer,
  TooltipBox,
  TooltipText,
  TooltipArrowPos,
  TooltipOutArrow,
  TooltipInArrow,
  About,
  Warning,
} from "./style";

const Tooltip = ({ children, option, height, width }) => {
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

  const printText = (str) => {
    return str.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line.split("<!>").map((line, index) => {
          if (index === 1) {
            return <Warning key={index}>{line.split("</!>")[0]}</Warning>;
          }
          return line;
        })}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <TooltipContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <TooltipBox height={height} width={width} hover={hoverButton}>
        <TooltipText>
          <About>이름</About>
          {printText(option.name)}
          <About>설명</About>
          {printText(option.info)}
          {option.printer && (
            <div>
              <About>출력방식</About>
              {option.printer}
            </div>
          )}
          {option.length && (
            <div>
              <About>길이</About>
              {option.length}
            </div>
          )}
          {option.speed && (
            <div>
              <About>속도</About>
              {option.speed}
            </div>
          )}
        </TooltipText>
        <TooltipArrowPos>
          <TooltipOutArrow />
          <TooltipInArrow />
        </TooltipArrowPos>
      </TooltipBox>
    </TooltipContainer>
  );
};

export default Tooltip;
