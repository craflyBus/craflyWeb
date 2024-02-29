import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;

  &.first {
    background-color: var(--deep-gray);
  }
`;

export const Title = styled.h1`
  position: relative;
  top: 30%;
  margin: 0;
  font-size: 50px;
  font-weight: 800;
  color: white;
`;

export const SubTitle = styled.h3`
  position: relative;
  top: 30%;
  margin: 0;
  font-size: 20px;
  color: white;
`;

export const Button = styled.button`
  position: relative;
  top: 40%;
  width: 400px;
  height: 50px;
  border: 3px black;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;
  color: var(--deep-gray);
  cursor: pointer;
`;
