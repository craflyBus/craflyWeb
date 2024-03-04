import styled from "styled-components";

export const SizeTextBox = styled.div`
  display: inline-block;
`;

export const IconBox = styled.div`
  display: inline-block;
`;

export const SizeText = styled.a`
  color: var(--deep-gray);
  margin: 0;
  font-size: 30px;
  text-align: center;
  &.value {
    color: var(--deep-blue);
  }
`;

export const IconJump = styled.div`
  display: inline-block;
  width: 30px;
`;

export const SliderBox = styled.div`
  margin: 0 auto;
  width: 90%;
`;

export const Slider = styled.input`
  accent-color: var(--deep-gray);
  width: 100%;
`;

export const Option = styled.option`
  display: grid;
  grid-auto-flow: column;
  text-align: center;
  width: 10px;
`;
