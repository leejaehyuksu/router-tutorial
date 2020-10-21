import React from 'react';
import './css/App.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Empty from './Empty';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import imgA from './img/imgA.png';

const NewLi = (props) => {
  return(
    <li className={props.cls}>
      <Link to={props.to} className={props.linkCss}>{props.text}</Link>
    </li>
  )
}
 /* <li className="menuBtn">
          <Link to="/empty" style={{ textDecoration: 'none', color:'white'}}>작품</Link>
        </li>  */

const App = () => {
  return (
    <div className="App-main">
      <div className="Top-main">
        <img src={ imgA } width='700' height='70' alt='imgA' />
      </div>
      <header className="App-header">
      <ul>
        <NewLi cls='menuBtn' to="/empty" linkCss='linkCss' text="작품" />
        <NewLi cls='menuBtn' to="/empty" linkCss='linkCss' text="아티스트" />
        <NewLi cls='menuBtn' to="/empty" linkCss='linkCss' text="공모전" />
        <NewLi cls='menuBtn' to="/about" linkCss='linkCss' text="샵" />
        <NewLi cls='homeBtn' to="/" linkCss='linkCss' text="홈으로가기" />
        <NewLi cls='signupBtn' to="/signup" linkCss='linkCss' text="회원가입" />
        <NewLi cls='loginBtn' to="/login" linkCss='linkCss' text="로그인" />
        </ul>
         {/* <li className="menuBtn">
          <Link to="/empty" style={{ textDecoration: 'none', color:'white'}}>작품</Link>
        </li>  */}

      </header>
      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/Login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="/Empty" component={Empty} />
    </div>
  );
};



export default App;