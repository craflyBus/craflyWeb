import styled from "styled-components";

export const ToastContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 20px;
`;

export const Toast = styled.div`
  position: static;
  color: white;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;

  &.info {
    background-color: rgba(0, 0, 0, 0.8);
  }
  &.attn {
    background-color: rgba(150, 120, 0, 0.8);
  }
`;
