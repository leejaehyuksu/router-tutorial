import React from 'react';
import './css/Login.css';
import imgA from './img/imgA.png';
import {  Link } from 'react-router-dom';
 
const Login = () => {
  return (
    <div className="App">
    <div className="Logo">      
    <img src={ imgA } width='300' height='30' alt='imgA' />
    </div>
      <form className="myLogin">
      <h3 className="form-main">로그인</h3>
        <div className="form-group">
          <label className="Loginemail-control">이메일 주소를 입력해주세요.*</label>
          <input type="email" className="form-control" id="emailInput"/>
        </div>
        <div className="form-group">
          <label className="password-control">비밀번호를 입력해주세요.*</label><br/>
          <input type="password" className="form-control" id="pwdInput"/>
        </div>
        <div>
          <li className="LoginSignupBtn">
            <Link to="/empty" style={{ color:'black' }}>아직 회원이 아니신가요?</Link>
          </li>
        </div>
        <button type="submit" className="LoginFinish">로그인</button><br/>      
      </form>
    </div>
  );
};

export default Login;