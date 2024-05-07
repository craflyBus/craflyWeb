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
import { ReactComponent as IconImg } from "@assets/images/Icon.svg";
import { ReactComponent as KakaoIconImg } from "@assets/images/Kakao.svg";
import useLogin from "@hooks/useLogin.js";

const Login = ({ isOpen, close }) => {
  const { idChange, pwChange, loginSubmit } = useLogin();

  const bubbleCutHandler = (e) => {
    e.stopPropagation();
  };

  return isOpen ? (
    <Modal>
      <div onClick={close}>
        <LoginModal onClick={(e) => bubbleCutHandler(e)}>
          <Close onClick={close}>×</Close>
          <ModalContents>
            <IconImg className="icon-img" />
            <div className="icon-text">Crafly Login</div>
            <LoginId
              type="text"
              placeholder="아이디"
              onChange={(e) => idChange(e)}
            />
            <LoginPw
              type="password"
              placeholder="비밀번호"
              onChange={(e) => pwChange(e)}
            />
            <LoginMid>
              <FindIdPw>아이디/비밀번호 찾기</FindIdPw>
            </LoginMid>
            <LoginBtn type="button" onClick={loginSubmit} value="로그인" />
            <SocialBox>
              <Link
                to={
                  "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=" +
                  process.env.REACT_APP_KAKAO_CLIENT_ID +
                  "&redirect_uri=" +
                  process.env.REACT_APP_API_URL +
                  "/v1/user/login/kakao"
                }
                style={{ textDecoration: "none", color: "black" }}
              >
                <Kakao>
                  <KakaoIconImg width={25} height={25} />
                  <KakaoText>카카오 계정으로 로그인</KakaoText>
                </Kakao>
              </Link>
            </SocialBox>
            <LoginEnd>
              <LoginLine>
                회원이 아니신가요? <Link to="/signup">회원가입</Link>
              </LoginLine>
            </LoginEnd>
          </ModalContents>
        </LoginModal>
      </div>
    </Modal>
  ) : null;
};

export default Login;
