import React from 'react'

import './Icon.css';

const Icon = ({classes, imgUrl, alt, logo}) => {
    return (
        <div className=  {`Icon ${classes}`}>
            <img src={imgUrl} alt={alt}/>
            <span>{logo}</span>
        </div>
    )
}

export default Icon;