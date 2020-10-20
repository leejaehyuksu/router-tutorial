import React from 'react';
import './css/Login.css';
import imgA from './img/imgA.png';
import Empty from './Empty';
import { Route, Link } from 'react-router-dom';
 
const Login = () => {
  return (
    <div className="App">
    <br/>      
    <img src={ imgA } width='200' height='20' alt='imgA' />
    <br/>
      <form className="myLogin">
      <h3 className="form-main">로그인</h3>
        <div className="form-group">
          <label className="Loginemail-control">이메일 주소를 입력해주세요.*</label><br/>
          <input
            type="email"
            className="form-control"
            id="emailInput"
          />
        </div>
        <div className="form-group">
          <label className="password-control">비밀번호를 입력해주세요.*</label><br/>
          <input
            type="password"
            className="Loginform-control"
            id="pwdInput"
          />
          
        </div>
        <li className="LoginSignupBtn"><Link to="/empty" style={{ color:'black' }}>아직 회원이 아니신가요?</Link></li>
        <br/>
        <button type="submit" className="LoginFinish">
          로그인
        </button>
        <br/>      
      </form>
      <br/><br/><br/><br/>
      <br/><br/><br/><br/>
      <Route path="/Empty" component={Empty} />
    </div>
);
};

export default Login;