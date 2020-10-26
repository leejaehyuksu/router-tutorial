import React from 'react';
import './../../css/App.css';
import './SignUp.css';
import imgA from './../../img/imgA.png';
import Axios from 'axios';

const SignUpDiv = (props) => {
  return (
    <div className="form-group">
      <label className={props.cls}>{props.text}</label>
      <input type={props.type} className="form-control" id={props.id}></input>
    </div>
  )
}

/* <div className="form-group">
<label className="Signname-control">사용할 닉네임을 알려주세요.*</label>
<input type="name" className="form-control" id="SignnameInput"/>           
</div> */

const SignUpAgree = (props) => {
  return (
    <div>
      <input type="checkbox" className={props.cls}></input>
      <label className="agree-control">{props.text}</label>
    </div>
  )
}

/* <input type = "checkbox" className="check1"></input>
          <label className="agree-control"></label> */

const Signup = () => {
  return (
    <div className="App">
      <div className="Logo">
        <img src={imgA} width='300' height='30' alt='imgA' />
      </div>
      <div className="SignUpForm">
        <div className="form-Signup">
          <h3 className="form-main">회원가입</h3>
          <SignUpDiv cls="Signemail-control" text="이메일 주소를 알려주세요.*" type="email" id="email" />
          <SignUpDiv cls="Signpwd-control" text="사용할 비밀번호를 입력해주세요.*" type="password" id="password" />
          <SignUpDiv cls="Signname-control" text="이름을 알려주세요.*" type="name" id="name" />
          <SignUpDiv cls="Signphone-control" text="나이를 알려주세요.*" type="phone" id="age" />
          <SignUpAgree cls="check1" text="이용약관 및 개인정보 처리방침에 동의합니다." />
          <SignUpAgree cls="check2" text="email을 통해 작품, 아티스트, 이벤트 소식을 받겠습니다." />
          <SignUpAgree cls="check3" text="요청한 대화에 새 답변이 있을 경우,알림을 받겠습니다." />
          <p className="agree-control2">(선택 해제시 커스텀 상담 중 실시간 알림을 받을수 없습니다.)*</p>
          <button type="submit" className="signupFinish" onClick={joinUser}>
            회원가입
        </button>
        </div>
      </div>
    </div>
  );
};
const joinUser = () => {
  const user = {};
  user.email = document.getElementById('email').value;
  user.password = document.getElementById('password').value;
  user.name = document.getElementById('name').value;
  user.age = document.getElementById('age').value;
  console.log(document.getElementById('email').value);

  Axios({
    method: 'POST',
    url: '/api/users',
    data: {
      email: user.email,
      password: user.password,
      name: user.name,
      age: user.age
    }
  });


}
export default Signup;