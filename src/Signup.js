import React from 'react';
import './App.css';
import imgA from './img/imgA.png';
 
const Signup = () => {
  return (
    <div className="App">
      <br/>      
      <img src={ imgA } width='200' height='20' alt='imgA' />
      <br/>
        <form className="myForm">
        <h3 className="form-main">일반 고객 회원가입</h3>
          <div className="form-group">
            <label className="email-control">이메일 주소를 알려주세요.*</label><br/>
            <input
              type="email"
              className="form-control"
              id="emailInput"
            />
          </div>
          <div className="form-group">
            <label className="pwd-control">사용할 비밀번호를 입력해주세요.*</label><br/>
            <input
              type="password"
              className="form-control"
              id="pwdInput"
            />
          </div>
          <div className="text-control">
            <label className="repwd-control">비밀번호를 다시 입력해주세요.*</label><br/>
            <input
              type="password"
              className="form-control"
              id="pwdInpu"
              placeholder=""
            />           
          </div>
          <div className="form-group">
            <label className="name-control">사용할 닉네임을 알려주세요.*</label><br/>
            <input
              type="name"
              className="form-control"
              id="nameInput"
            />           
          </div>
          <div className="form-group">
            <label className="phone-control">연락처를 알려주세요.*</label><br/>
            <input
              type="phone"
              className="formphone-control"
              id="phoneInput"
            />
             <button type="submit" className="confirm-Btn"> 
            인증번호
          </button>
            <p className="exphone">000-0000-00000</p>          
          </div>
          <input
              type="phone"
              className="reconfirm-control"
              id="phoneInput"
              placeholder="인증번호"
            />         
          <br/>
          <input type = "checkbox" className="check1"></input>
          <label className="agree-control1">이용약관 및 개인정보 처리방침에 동의합니다.</label><br/> 
          <input type = "checkbox" className="check2" ></input>
          <label className="agree-control1">email을 통해 작품, 아티스트, 이벤트 소식을 받겠습니다.</label><br/>
          <input type = "checkbox" className="check3" ></input>
          <label className="agree-control1">요청한 대화에 새 답변이 있을 경우,알림을 받겠습니다.<br/></label>
          <p className="agree-control2">(선택 해제시 커스텀 상담 중 실시간 알림을 받을수 없습니다.)*</p>  
          <br/>
          <button type="submit" className="signupFinish">
            회원가입
          </button>
          <br/>      
        </form>
        <br/><br/><br/><br/>
      </div>
  );
};

export default Signup;