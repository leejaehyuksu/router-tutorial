import React from 'react';
import './../../css/App.css';
import './SignUp.css';
import imgA from './../../img/imgA.png';

const SignUpDiv = (props) => {
  return(
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
  return(
    <div>
    <input type = "checkbox" className={props.cls}></input>
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
        <img src={ imgA } width='300' height='30' alt='imgA' />
      </div>
        <form className="SignUpForm">
          <h3 className="form-main">회원가입</h3>
            <SignUpDiv cls="Signemail-control" text="이메일 주소를 알려주세요.*" type="email" id="SignemailInput"/>
            <SignUpDiv cls="Signpwd-control" text="사용할 비밀번호를 입력해주세요.*" type="password" id="SignpwdInput"/>
            <SignUpDiv cls="Signrepwd-control" text="비밀번호를 다시 입력해주세요.*" type="password" id="SignpwdInput"/>          
            <SignUpDiv cls="Signname-control" text="사용할 닉네임을 알려주세요.*" type="name" id="SignnameInput"/>      
            <SignUpDiv cls="Signphone-control" text="연락처를 알려주세요.*" type="phone" id="SignphoneInput"/>
              <p className="exphone">000-0000-00000</p>          
            <SignUpAgree cls="check1"  text="이용약관 및 개인정보 처리방침에 동의합니다."/>
            <SignUpAgree cls="check2"  text="email을 통해 작품, 아티스트, 이벤트 소식을 받겠습니다."/>
            <SignUpAgree cls="check3"  text="요청한 대화에 새 답변이 있을 경우,알림을 받겠습니다."/>
              <p className="agree-control2">(선택 해제시 커스텀 상담 중 실시간 알림을 받을수 없습니다.)*</p>  
                <button type="submit" className="signupFinish">
                  회원가입
                </button>      
        </form>
      </div>
  );
};

export default Signup;