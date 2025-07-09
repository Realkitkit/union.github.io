import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>&copy; 2024 이학성. 모든 권리 보유.</p>
          <p>이 페이지는 React로 제작되었습니다.</p>
        </div>
        <div className="footer-links">
          <a href="#" className="footer-link">GitHub</a>
          <a href="#" className="footer-link">LinkedIn</a>
          <a href="#" className="footer-link">이메일</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 