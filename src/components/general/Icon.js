import React from 'react'

import './Icon.css';

const Icon = (props) => {
    return (
        <div className=  {`Icon ${props.class}`}>
            <img src={props.imgUrl} alt={props.alt}/>
            <span>{props.logo}</span>
        </div>
    )
}

export default Icon;