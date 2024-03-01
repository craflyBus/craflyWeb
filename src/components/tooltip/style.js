import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    display: block;
  }
  to {
    display: block;
  }
`;

const fadeOut = keyframes`
  from {
    display: block;
  }
  to {
    display: none;
  }
`;

export const TooltipContainer = styled.div`
  position: relative;
  width: fit-content;
  height: fit-content;
`;

export const TooltipBox = styled.div`
  display: block;
  position: absolute;
  width: ${(props) => props.width};
  background-color: #ffffff;
  border: 2px solid var(--deep-gray);
  border-radius: 6px;
  padding: 5px;
  z-index: 1;
  left: ${(props) => props.width / 2};
  top: calc(${(props) => props.height} + 8px);
  transition: opacity 0.3s ease;

  opacity: ${(props) => (props.hover ? 1 : 0)};
  animation: ${(props) => (props.hover ? fadeIn : fadeOut)} 0.4s ease forwards;
`;

export const TooltipText = styled.h1`
  color: #000000;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
`;
export const TooltipArrowPos = styled.div`
  display: block;
  position: absolute;
  top: -9px;
  width: 100%;
`;
export const TooltipInArrow = styled.div`
  border-color: white transparent;
  border-style: solid;
  border-width: 0 6px 8px 6.5px;
  content: "";
  display: block;
  position: absolute;
  top: 3px;
  width: 0;
  z-index: 1;
`;
export const TooltipOutArrow = styled.div`
  border-color: var(--deep-gray) transparent;
  border-style: solid;
  border-width: 0 6px 8px 6.5px;
  content: "";
  display: block;
  right: 50px;
  top: -9px;
  width: 0;
  z-index: 0;
`;
export const About = styled.h1`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
  color: green;
`;
