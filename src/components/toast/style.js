import styled from "styled-components";

export const Toast = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
  color: white;
  padding: 10px;
  border-radius: 10px;

  &.info {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &.attn {
    background-color: rgba(150, 120, 0, 0.8);
  }
`;
