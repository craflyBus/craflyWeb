import styled from "styled-components";

export const File = styled.input`
  display: none;
  &::file-selector-button {
    font-size: 14px;
    background: #fff;
    border: 1px solid #111;
    border-radius: 12px;
    padding: 4px 32px;
    cursor: pointer;
  }
`;

export const Preview = styled.label`
  width: auto;
  height: 300px;
  margin: auto;
  background-color: #fff;
  border-radius: 5px;
  border: 3px dashed #eee;
  padding: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border-color: #111;
  }
  &.active {
    background-color: #efeef3;
    border-color: #111;
  }
`;

export const PreviewMsg = styled.p`
  font-weight: 500;
  font-size: 18px;
  margin: 20px 0 10px;
`;

export const PreviewDesc = styled.p`
  margin: 0;
  font-size: 14px;
`;
