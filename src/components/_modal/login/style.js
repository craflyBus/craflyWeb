import styled from "styled-components";

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;
export const LoginModal = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
`;

export const Close = styled.span`
  float: right;
  font-size: 25px;
  cursor: pointer;
`;

export const ModalContents = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

  .icon-img {
    width: 150px;
    margin: 10px auto 10px auto;
    fill: var(--deep-gray);
  }
  .icon-text {
    font-size: 30px;
    font-weight: 700;
    margin: 0 auto 30px auto;
    fill: var(--deep-gray);
  }
`;

export const SigninIcon = styled.img`
  width: 150px;
  margin: 0 auto;
`;

export const LoginId = styled.input`
  margin-top: 30px;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    color: #999999;
  }
`;

export const LoginPw = styled.input`
  margin-top: 15px;
  border-radius: 2px;
  width: 100%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;

  ::placeholder {
    color: #999999;
  }
`;

export const LoginMid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FindIdPw = styled.div`
  font-size: 12px;
  color: #8d8d8d;
  line-height: 3;
`;

export const LoginBtn = styled.input`
  height: 40px;
  font-size: 14px;
  padding: 13px 30px;
  cursor: pointer;
  background-color: black;
  color: white;
  line-height: 1px;
  margin-top: 20px;
  margin-bottom: 12px;
  border-radius: 3px;
  border-style: none;
`;

export const SocialBox = styled.div`
  margin-bottom: 30px;
`;

export const Kakao = styled.div`
  background-color: #feec34;
  border-color: #feec34;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-bottom: 10px;
  border-radius: 3px;
  cursor: pointer;
`;

export const KakaoText = styled.div`
  width: 200px;
  font-size: 15px;
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
`;

export const LoginEnd = styled.div`
  text-align: center;
  font-size: 11px;
`;

export const LoginLine = styled.div`
  color: #bcbcbc;
  font-size: 11px;
  margin-bottom: 35px;
  a {
    color: black;
    text-decoration: underline;
    cursor: pointer;
  }
`;
