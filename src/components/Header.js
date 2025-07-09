import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>이학성</h1>
          <span className="title">C++ Developer</span>
        </div>
        <nav className="header-nav">
          <a href="#about" className="nav-link">소개</a>
          <a href="#experience" className="nav-link">경력</a>
          <a href="#skills" className="nav-link">기술</a>
          <a href="#contact" className="nav-link">연락처</a>
        </nav>
      </div>
    </header>
  );
}

export default Header; 