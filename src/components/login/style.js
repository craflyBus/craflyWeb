import styled from "styled-components";

export const Box = styled.div`
  width: 50vw;
  height: 50vh;

  background-color: var(--deep-gray);
`;

export const Id = styled.div`
  width: 200px;
  height: 20px;

  &.first {
    background-color: var(--deep-gray);
  }
  &.second {
    background-color: white;
  }
  &.third {
    background-color: var(--deep-gray);
  }
`;
