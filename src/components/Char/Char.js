import React from 'react';

import './Char.css';

const char = (props) => {
    return (
        <div className='char' onClick={props.clickHandler}>
            {props.letter}
        </div>
    );
}

export default char;