import React from 'react'

import './Icon.css';

const Icon = (props) => {
    return (
        <div className=  {`icon ${props.class}`}>
            <img src={props.imgUrl} alt={props.alt}/>
            <p>{props.logo}</p>
        </div>
    )
}

export default Icon;