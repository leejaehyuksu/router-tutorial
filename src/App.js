import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Empty from './Empty';
import Login from './Login';
import Home from './Home';
import Signup from './Signup';
import imgA from './img/imgA.png';


const App = () => {
  return (
    <div className="App">
      <br/>
        <img src={ imgA } width='300' height='30' alt='imgA' />
      <header className="App-header">
      <ul>
        <li className="menuBtn"><Link to="/empty" style={{ textDecoration: 'none',color:'white' }}>작품</Link></li>
        <li className="menuBtn"><Link to="/empty" style={{ textDecoration: 'none',color:'white' }}>아티스트</Link></li>
        <li className="menuBtn"><Link to="/empty" style={{ textDecoration: 'none',color:'white' }}>공모전</Link></li>
        <li className="menuBtn"><Link to="/about" style={{ textDecoration: 'none',color:'white' }}>샵</Link></li>
        <li className="homeBtn"><Link to="/" style={{ textDecoration: 'none',color:'white' }}>홈으로가기</Link></li>
        <li className="loginBtn"><Link to="/login" style={{ textDecoration: 'none',color:'white' }}>로그인</Link></li>
        <li className="signupBtn"><Link to="/signup" style={{ textDecoration: 'none',color:'white' }}>회원가입</Link></li>
        </ul>
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