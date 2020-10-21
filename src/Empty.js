import React from 'react';
import './css/App.css';
import './css/Empty.css';

 
const Empty = () => {
  return (
 
  <div id="mainWrapper">
    <ul>
       <ul id ="ulTable">
                    <li>
                        <ul>
                            <li>No</li>
                            <li>제목</li>
                            <li>작성일</li>
                            <li>작성자</li>
                            <li>조회수</li>
                        </ul>
                    </li>
        </ul>
      </ul>
    </div>
  );
};

export default Empty;