import React from 'react';

function Sidebar({ activeSection, setActiveSection, activeExperience, setActiveExperience }) {
  // 나이 계산 (1999년생)
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  const menuItems = [
    { id: 'about', label: '소개', icon: '👨‍💻' },
    { id: 'experience', label: '경력', icon: '💼' },
    { id: 'skills', label: '기술 스택', icon: '🛠️' },
    { id: 'security', label: '보안 업무', icon: '🔒' },
    { id: 'contact', label: '연락처', icon: '📞' }
  ];

  const experienceItems = [
    { id: 'inotium', label: '이노티움 (2022.05 ~ 2025.06)', icon: '🏢' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <div className="avatar">
            <img 
              src="/image/main_Pic1.jpg" 
              alt="이학성 프로필" 
              className="avatar-image"
            />
          </div>
          <h3>이학성</h3>
          <p>C++ Developer</p>
          <p className="age">{age}세</p>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <div key={item.id}>
              <button
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-label">{item.label}</span>
              </button>
              
              {item.id === 'experience' && activeSection === 'experience' && (
                <div className="sub-nav">
                  {experienceItems.map(subItem => (
                    <button
                      key={subItem.id}
                      className={`sub-nav-item ${activeExperience === subItem.id ? 'active' : ''}`}
                      onClick={() => setActiveExperience(subItem.id)}
                    >
                      <span className="nav-icon">{subItem.icon}</span>
                      <span className="nav-label">{subItem.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar; 