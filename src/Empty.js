import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './Home';
import './App.css';

 
const Empty = () => {
  return (
    <div className="App-main">
    <button><Link to="/">홈으로가기</Link></button>
    <Route path="/" component={Home} exact={true} />
    </div>
  );
};

export default Empty;