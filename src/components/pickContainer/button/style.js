import styled from "styled-components";

export const PickBlock = styled.div`
  display: inline-block;
`;

export const PickBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
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

export const Pick = styled.div`
  width: 300px;
  background-color: white;
  border: 3px solid var(--deep-gray);
  border-radius: 5px;

  margin-right: 15px;
  cursor: pointer;

  transition: background-color 0.5s ease;

  background-color: ${(props) => {
    return props.pick === "pick" ? "#404040" : "white";
  }};
`;
export const PickJump = styled.div`
  margin-bottom: 20px;
`;

export const PickTitle = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 900;

  transition: color 0.5s ease;

  color: ${(props) => {
    return props.pick === "pick" ? "white" : "black";
  }};

  margin: 0 auto;
`;
