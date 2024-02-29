import styled from "styled-components";

export const FooterContainer = styled.header`
  left: 0;
  top: 0;
  width: 100%;
  height: 200px;
  border-top: 1px solid gray;
  background-color: var(--deep-gray);
`;

export const Logo = styled.div`
  cursor: pointer;
  height: 40px;
`;

export const Info = styled.div`
  cursor: pointer;
  height: 40px;
`;

export const Contents = styled.div`
  display: flex;
  width: 96%;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const Navigation = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin-top: 50px;

    font-weight: 500;
    font-size: 14px;
    color: white;
    cursor: pointer;
    li + li {
      &:not(:first-child) {
        margin-left: 20px;
      }
    }
  }
`;
