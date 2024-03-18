import styled from "styled-components";

export const ToastAlert = styled.div`
  background-color: rgba(255, 127, 80, 0.4);
  border: 1px solid rgba(255, 127, 80, 0.1);
  border-radius: 10px;
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%);
  height: 40px;
  width: 250px;
  padding: 5px;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 20px;
  left: 20px;

  img {
    width: 25px;
    height: auto;
    margin-right: 10px;
  }
  p {
    margin: 0;
  }
`;
