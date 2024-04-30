import { Link } from "react-router-dom";
import {
  LoginModal,
  Modal,
  Close,
  ModalContents,
  LoginId,
  LoginPw,
  LoginMid,
  FindIdPw,
  LoginBtn,
  SocialBox,
  Kakao,
  KakaoText,
  LoginEnd,
  LoginLine,
} from "./style.js";
import { ReactComponent as IconImg } from "../../../assets/images/Icon.svg";
import { ReactComponent as KakaoIconImg } from "../../../assets/images/Kakao.svg";
import { useState } from "react";

const Login = ({ isOpen, close }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const changeIdHandler = (e) => {
    setId(e.target.value);
  };

  const changePwHandler = (e) => {
    setPw(e.target.value);
  };

  const loginClickHandler = () => {
    fetch(`http://${process.env.REACT_APP_API_KEY}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        pw,
      }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return isOpen ? (
    <Modal>
      <div onClick={close}>
        <LoginModal>
          <Close onClick={close}>&times;</Close>
          <ModalContents>
            <IconImg className="icon-img" />
            <div className="icon-text">Crafly Login</div>
            <LoginId
              type="text"
              placeholder="아이디"
              onChange={(e) => changeIdHandler(e)}
            />
            <LoginPw
              type="password"
              placeholder="비밀번호"
              onChange={(e) => changePwHandler(e)}
            />
            <LoginMid>
              <FindIdPw>아이디/비밀번호 찾기</FindIdPw>
            </LoginMid>
            <LoginBtn
              type="button"
              onClick={loginClickHandler}
              value="로그인"
            />
            <SocialBox>
              <Kakao>
                <KakaoIconImg width={25} height={25} />
                <KakaoText>카카오 계정으로 로그인</KakaoText>
              </Kakao>
            </SocialBox>
            <LoginEnd>
              <LoginLine>회원이 아니신가요? 회원가입</LoginLine>
            </LoginEnd>
          </ModalContents>
        </LoginModal>
      </div>
    </Modal>
  ) : null;
};

export default Login;
