import React from 'react';
import './Login.css';
import imgA from '../../img/imgA.png';
import { Link } from 'react-router-dom';

const LoginDiv = (props) => {
  return (
    <div className="form-group">
      <label className={props.cls}>{props.text}</label>
      <input type={props.type} className="form-control" id={props.id} />
    </div>
  )
}



const Login = () => {
  return (
    <div className="App">
      <div className="Logo">
        <img src={imgA} width='300' height='30' alt='imgA' />
      </div>
      <div className="myLogin">
        <div className="form-login">
          <h3 className="form-main">로그인</h3>
          <LoginDiv cls="Loginemail-control" type="email" text="이메일 주소를 입력해주세요.*" id="emailInput" />
          <LoginDiv cls="password-control" type="password" text="비밀번호를 입력해주세요.*" id="pwdInput" />
          <div>
            <li className="LoginSignupBtn">
              <Link to="/signUp">아직 회원이 아니신가요?</Link>
            </li>
          </div>
          <button type="submit" className="LoginFinish">로그인
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;