import React from 'react';
import './css/App.css';
import './css/Home.css';
import { Link } from 'react-router-dom';
import imgB from './img/imgB.png';
import imgC from './img/imgC.png';
import imgD from './img/imgD.png';
import imgE from './img/imgE.png';


const Home = () => {
  return (
    
    <div className="App-mainpage">
      <p className="Main-content">꿈꾸던 디자인을</p>  
      <p className="Main-content">현실로 만들어보세요.</p>
      <button className="CustomBtn">
        <Link to="/home" style={{ textDecoration: 'none',color:'black' }}>
          커스텀 공모하기
          </Link>
      </button><br/><br/>
      <div>
        <img src={ imgB } width='250' height='250' alt='imgB' />&nbsp;&nbsp;
        <img src={ imgC } width='250' height='250' alt='imgC' />&nbsp;&nbsp;
        <img src={ imgD } width='250' height='250' alt='imgD' />&nbsp;&nbsp;
        <img src={ imgE } width='250' height='250' alt='imgE' />
      </div>
    </div>

  );
};

export default Home;