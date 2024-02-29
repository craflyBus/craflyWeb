import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: var(--deep-gray);
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

    font-weight: 700;
    color: white;
    cursor: pointer;
    li + li {
      &:not(:first-child) {
        margin-left: 50px;
      }
    }
  }
`;
