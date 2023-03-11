import React from 'react'
import "./Header.css";
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = ({ title, image, content }) => {
  return (
    <div className="header">
      <HeaderLeft title="Vincent Vo" content="Junior Web Developer" />
      <HeaderRight/>
    </div>
  );
}

export default Header;
