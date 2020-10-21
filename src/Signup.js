import React from 'react';
import './css/App.css';
import './css/SignUp.css';
import imgA from './img/imgA.png';

const Signup = () => {
  return (
    <div className="App"> 
      <div className="Logo">  
        <img src={ imgA } width='300' height='30' alt='imgA' />
      </div>
        <form className="SignUpForm">
          <h3 className="form-main">회원가입</h3>
            <div className="form-group">
              <label className="Signemail-control">이메일 주소를 알려주세요.*</label>
              <input type="email" className="form-control" id="SignemailInput"/>
            </div>
          <div className="form-group">
            <label className="Signpwd-control">사용할 비밀번호를 입력해주세요.*</label>
            <input type="password" className="form-control" id="SignpwdInput"/>
          </div>
          <div className="form-group">
            <label className="Signrepwd-control">비밀번호를 다시 입력해주세요.*</label>
            <input type="password" className="form-control" id="SignpwdInput" />           
          </div>
          <div className="form-group">
            <label className="Signname-control">사용할 닉네임을 알려주세요.*</label>
            <input type="name" className="form-control" id="SignnameInput"/>           
          </div>
          <div className="form-group">
            <label className="Signphone-control">연락처를 알려주세요.*</label><br/>
            <input type="phone" className="form-control" id="SignphoneInput"/>
          <p className="exphone">000-0000-00000</p>          
          </div>
          <input type = "checkbox" className="check1"></input>
          <label className="agree-control">이용약관 및 개인정보 처리방침에 동의합니다.</label><br/> 
          <input type = "checkbox" className="check2" ></input>
          <label className="agree-control">email을 통해 작품, 아티스트, 이벤트 소식을 받겠습니다.</label><br/>
          <input type = "checkbox" className="check3" ></input>
          <label className="agree-control">요청한 대화에 새 답변이 있을 경우,알림을 받겠습니다.</label>
          <p className="agree-control2">(선택 해제시 커스텀 상담 중 실시간 알림을 받을수 없습니다.)*</p>  
          <button type="submit" className="signupFinish">
            회원가입
          </button>      
        </form>
      </div>
  );
};

export default Signup;