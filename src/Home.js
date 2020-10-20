import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import imgB from './img/imgB.png';
import imgC from './img/imgC.png';
import imgD from './img/imgD.png';
import imgE from './img/imgE.png';


const Home = () => {
  return (
    <div className="App-main">
    <h1>꿈꾸던 디자인을</h1> 
    <h1>현실로 만들어보세요.</h1>
    <button className="Btn1"><Link to="/home" style={{ textDecoration: 'none',color:'black' }}>커스텀 공모하기</Link></button><br/><br/>
    <div>
    <img src={ imgB } width='100' height='100' alt='imgB' />&nbsp;&nbsp;
    <img src={ imgC } width='100' height='100' alt='imgC' />&nbsp;&nbsp;
    <img src={ imgD } width='100' height='100' alt='imgD' />&nbsp;&nbsp;
    <img src={ imgE } width='100' height='100' alt='imgE' />
    </div>
    </div>
    
  );
};

export default Home;