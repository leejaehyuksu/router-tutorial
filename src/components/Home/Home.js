import React from 'react';
import './../../css/App.css';
import './Home.css';
import { Link } from 'react-router-dom';
import imgB from './../../img/imgB.png';
import imgC from './../../img/imgC.png';
import imgD from './../../img/imgD.png';
import imgE from './../../img/imgE.png';

const Img = (props) => {
  return (
    <img src={props.img} className={props.imgCss} alt=""></img>
  )
}

/* <img src={ imgC } width='250' height='250' alt='' /> */
const Home = () => {
  return (

    <div className="App-mainpage">
      <p className="Main-content">꿈꾸던 디자인을 <br /> 현실로 만들어보세요</p>

      <button className="CustomBtn">
        <Link id="Customtext" to="/home">
          커스텀 공모하기
          </Link>
      </button>
      <div>
        <Img img={imgB} imgCss='imgCss' />
        <Img img={imgC} imgCss='imgCss' />
        <Img img={imgD} imgCss='imgCss' />
        <Img img={imgE} imgCss='imgCss' />
      </div>
    </div>

  );
};

export default Home;