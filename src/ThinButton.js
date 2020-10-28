import React from 'react';
import './css/ThinButton.css';

export function ThinButton(props) {
    return (
        <button className='btnCss' onClick={props.onClick}>{props.text}</button>
    );
}