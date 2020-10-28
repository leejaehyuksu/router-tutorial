import React from 'react';
import './Login.css';
import imgA from '../../img/imgA.png';
import { Link } from 'react-router-dom';
import axios from 'axios';


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
          <LoginDiv cls="Loginemail-control" type="email" text="이메일 주소를 입력해주세요.*" id="email" />
          <LoginDiv cls="password-control" type="password" text="비밀번호를 입력해주세요.*" id="password" />
          <div>
            <li className="LoginSignupBtn">
              <Link to="/signUp">아직 회원이 아니신가요?</Link>
            </li>
          </div>
          <button type="submit" className="LoginFinish" onClick={LoginUser}>로그인
        </button>
        </div>
      </div>
    </div>
  );
};

const LoginUser = async () => {
  const user = {};
  user.email = document.getElementById('email').value;
  user.password = document.getElementById('password').value;
  console.log(document.getElementById('email').value)
  console.log(document.getElementById('password').value)


  const { data: post } = await axios.post('/api/users/login', user);
  console.log(post);

  if (post.email != null && post.password != null) {
    sessionStorage.setItem('user', JSON.stringify(post)); // 쿠키같은
    console.log('세션저장완료');

    return (
      alert('로그인 성공'),
      window.location.href = "/"
    )

  } else {
    alert('존재하지 않거나 잘못 입력된 정보입니다.');
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
  }

}
export default Login;