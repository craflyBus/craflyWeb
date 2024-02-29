import styled from "styled-components";

export const RequestDroneContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Title = styled.h1`
  width: 100%;
  font-size: 50px;
  font-weight: 700;
`;
export const MainTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 700;
  margin: 0;
  margin-top: 100px;
`;

export const SubTitle = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 75px;
`;

export const Section = styled.div`
  width: 90vw;
  margin: auto;

  border: 2px solid var(--pale-gray);
  border-radius: 5px;
  padding: 10px;
`;

export const SectionTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const PickBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
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
