import styled from "styled-components";

export const Section = styled.div`
  width: 100%;
  height: 100vh;

  &.first {
    background-color: var(--deep-gray);
  }
  &.second {
    background-color: white;
  }
`;

export const InfoBox = styled.div`
  top: 25%;
  position: relative;
`;

export const Title = styled.h1`
  position: relative;
  margin: 0;
  font-size: 50px;
  font-weight: 800;
  &.first {
    color: white;
  }
  &.second {
    color: var(--deep-gray);
    text-align: left;
    margin-left: 30px;
  }
`;

export const SubTitle = styled.h3`
  position: relative;
  margin-top: 0;
  margin-bottom: 75px;
  font-size: 20px;
  &.first {
    color: white;
  }
  &.second {
    color: var(--deep-gray);
    text-align: left;
    margin-left: 30px;
  }
`;

export const SliceBar = styled.div`
  position: relative;
  width: 100px;
  height: 2px;
  background-color: var(--pale-gray);
  &.first {
    margin: 0 auto;
  }
  &.second {
    color: var(--deep-gray);
    margin-left: 30px;
  }
`;

export const Button = styled.button`
  position: absolute;
  margin-top: 75px;
  width: 400px;
  height: 50px;
  border: 3px black;
  border-radius: 5px;
  font-size: 25px;
  font-weight: 700;
  color: var(--deep-gray);
  cursor: pointer;

  &.first {
    left: calc(50% - 200px);
  }
  &.second {
    left: 30px;
  }
`;
