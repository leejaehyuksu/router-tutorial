import React from 'react';
import './css/About.css';
import './App.css';

const About = () => {
  return (
    <div className="App">    
      <br/>
       <tr className="memberList" style={{ color:'white' }}>
          <th className="memberId">아이디</th>
          <th className="memberName">고객명</th>
          <th className="memberPhone">메일주소</th>
          <th className="memberEmail">나이</th>
   </tr>
   <hr style={{ color:'white' }}></hr>
</div>
  );
};

export default About;