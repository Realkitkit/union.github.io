import React from 'react';

function Dashboard({ activeSection, activeExperience }) {
  // 나이 계산 (1999년생)
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  const renderExperienceContent = () => {
    switch (activeExperience) {
      case 'inotium':
        return (
          <div className="experience-card">
            <div className="company-info">
              <h3>이노티움 (2022.05 ~ 2025.06)</h3>
              <span className="position">대리</span>
              <span className="duration">3년 근무</span>
            </div>
            
            <div className="role-description">
              <h4>🛡️ 랜섬웨어 방어 프로그램 개발</h4>
              <p><strong>랜섬웨어 방어 프로그램 보안기능확인서 발급 메인 개발자</strong></p>
              <p><strong>기술 스택:</strong> C, C++, AWS EC2, AWS S3, AWS RDS</p>
              <ul>
                <li><strong>성능 최적화:</strong> PID 검증을 위한 포인터 로직을 수정하여 CPU 사용량 약 12% 감소</li>
                <li><strong>통신 로직 개발:</strong> 통신 불가로 인한 통신로직 개발</li>
                <li><strong>보안 강화:</strong> MSSQL payload 취약점 분석 및 방어 로직 개발</li>
                <li><strong>무결성 검증:</strong> 무결성검증 로직 적용으로 변조 감지 및 변조된 파일 Fix 코드 추가</li>
                <li><strong>전자서명:</strong> 전자서명 검증 로직 개발</li>
                <li><strong>침해대응 센터 활동:</strong> 오탐 방지 및 탐지 기능 향상을 위한 디버깅 및 랜섬웨어 침해대응 센터 활동
                  <ul>
                    <li>현장 대응 및 QA팀과 소통하여 추가 기능 약 30여개 개발</li>
                    <li>랜섬웨어 침해 경로 파악 및 방어 로직 4개 개발</li>
                    <li>랜섬웨어 분석을 위한 주기적인 연구 진행</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <div className="role-description">
              <h4>🐧 리눅스 + 개방형OS 워터마크 개발</h4>
              <p><strong> 메인 솔로 개발</strong></p>
              <p><strong>기술 스택:</strong> C++, X11</p>
              <ul>
                <li><strong>워터마크 솔루션:</strong> C++ / X11 을 이용한 워터마크 솔루션 개발</li>
                <li><strong>최전방 워터마크:</strong> 최전방 워터마크 기능 추가</li>
                <li><strong>정책 적용:</strong> 개별 워터마크 정책 적용</li>
                <li><strong>WorkSpace 지원:</strong> 모든 WorkSpace에서 항상 최전방 워터마크 기능 적용</li>
              </ul>
            </div>
            
            <div className="role-description">
              <h4>🍎 맥OS 워터마크 개발</h4>
              <p><strong> 메인 솔로 개발</strong></p>
              <p><strong>기술 스택:</strong> Swift, AppKit</p>
              <ul>
                <li><strong>네이티브 개발:</strong> AppKit을 이용한 워터마크 제작</li>
                <li><strong>최전방 기능:</strong> 최전방 워터마크 기능 추가</li>
                <li><strong>정책 관리:</strong> JSON을 통한 개별 워터마크 정책 적용</li>
                <li><strong>전체 지원:</strong> 모든 WorkSpace에서 항상 최전방 워터마크 기능 적용</li>
                <li><strong>시스템 정보:</strong> 적용된 PC의 정보를 후킹한 설정 추가</li>
              </ul>
            </div>
            
            <div className="role-description">
              <h4>🖥️ 서버 관리</h4>
              <p><strong>IDC센터 메인 관리자</strong></p>
              <ul>
                <li><strong>로드밸런싱:</strong> 각 Active 서버의 실시간 트래픽 분산 관리</li>
                <li><strong>디스크 관리:</strong> Disk Pool 관리 (90% 이상 올라가지 않도록 모니터링)</li>
                <li><strong>캐시 시스템:</strong> SSD를 이용한 Cash 관리 시스템 구축</li>
                <li><strong>네트워크 관제:</strong> 네트워크 트래픽 관제 및 사용에 따른 권장량 보고서 제작 후 예산 할당 및 적용</li>
                <li><strong>데이터 보호:</strong> RAID 시스템 및 데이터 보호 시스템 관리</li>
              </ul>
              <p><strong>서버 구축 및 관리</strong></p>
              <ul>
                <li><strong>서버 구축:</strong> 고객사 서버에 개별 백엔드 구축 및 프론트 페이지 연동</li>
                <li><strong>서버 취약점 분석:</strong> XSS취약점 및 업로드 취약점 개선</li>
                <li><strong>유지보수:</strong> 현장 대응 및 주기적인 소통으로 고객사 니즈(정책 혹은 질의응답) 해소</li>
              </ul>
            </div>
          </div>
        );
      default:
        return <div>경력 정보를 찾을 수 없습니다.</div>;
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="section about-section">
            <h2>안녕하세요! 👋</h2>
            
            <div className="profile-card">
              <div className="profile-image">
                <img 
                  src="/image/main_Pic1.jpg" 
                  alt="이학성 프로필" 
                  className="profile-main-image"
                />
              </div>
              <div className="profile-info">
                <h3>이학성</h3>
                <p className="profile-age">{age}세 (1999년생)</p>
                <div className="profile-contact">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <a href="mailto:unionday@naver.com" className="contact-link">unionday@naver.com</a>
                  </div>
                  <div className="contact-item">
                    <span className="contact-icon">💻</span>
                    <a href="https://github.com/Realkitkit" target="_blank" rel="noopener noreferrer" className="contact-link">
                      GitHub: @Realkitkit
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="intro-card">
              <p>저는 <strong>이학성</strong>입니다. {age}세의 열정적인 C++ 개발자로써 3년간 이노티움에서 대리로 근무하며 다양한 프로젝트를 경험했습니다.</p>
              <p>프로그램 개발뿐만 아니라 기술지원, 유지보수, 그리고 보안 분야에서도 경험을 쌓았습니다.</p>
            </div>
          </div>
        );
      
      case 'experience':
        return (
          <div className="section experience-section">
            <h2>경력 사항 💼</h2>
            {renderExperienceContent()}
          </div>
        );
      
      case 'skills':
        return (
          <div className="section skills-section">
            <h2>기술 스택 🛠️</h2>
            <div className="skills-grid">
              <div className="skill-category">
                <h3>프로그래밍 언어</h3>
                <div className="skill-tags">
                  <span className="skill-tag primary">C</span>
                  <span className="skill-tag primary">C++</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                  <span className="skill-tag">Swift</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>운영체제</h3>
                <div className="skill-tags">
                  <span className="skill-tag">Windows</span>
                  <span className="skill-tag">Ubuntu</span>
                  <span className="skill-tag">개방형OS</span>
                  <span className="skill-tag">macOS</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>클라우드 & 인프라</h3>
                <div className="skill-tags">
                  <span className="skill-tag">AWS EC2</span>
                  <span className="skill-tag">AWS S3</span>
                  <span className="skill-tag">AWS RDS</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>개발 도구 & 프레임워크</h3>
                <div className="skill-tags">
                  <span className="skill-tag">X11</span>
                  <span className="skill-tag">AppKit</span>
                  <span className="skill-tag">JSON</span>
                  <span className="skill-tag">MSSQL</span>
                </div>
              </div>
              
              <div className="skill-category">
                <h3>서버 & 인프라 관리</h3>
                <div className="skill-tags">
                  <span className="skill-tag">IDC 센터 관리</span>
                  <span className="skill-tag">로드밸런싱</span>
                  <span className="skill-tag">RAID 시스템</span>
                  <span className="skill-tag">SSD 캐시</span>
                  <span className="skill-tag">네트워크 트래픽 관제</span>
                  <span className="skill-tag">디스크 풀 관리</span>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'security':
        return (
          <div className="section security-section">
            <h2>보안 업무 🔒</h2>
            <div className="security-card">
              <h3>랜섬웨어 침해대응 센터</h3>
              <div className="security-details">
                <div className="security-item">
                  <h4>🔍 침투 경로 분석</h4>
                  <p>랜섬웨어의 시스템 침투 경로를 분석하고 보안 취약점을 식별합니다.</p>
                </div>
                <div className="security-item">
                  <h4>🦠 감염 형식 분석</h4>
                  <p>다양한 랜섬웨어의 감염 방식과 패턴을 연구하여 대응 방안을 수립합니다.</p>
                </div>
                <div className="security-item">
                  <h4>🛡️ 침해 대응</h4>
                  <p>실시간 보안 위협 모니터링 및 즉각적인 대응 체계를 운영합니다.</p>
                </div>
                <div className="security-item">
                  <h4>🔧 방어 로직 개발</h4>
                  <p>MSSQL payload 취약점 분석 및 4개의 랜섬웨어 방어 로직을 개발했습니다.</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'contact':
        return (
          <div className="section contact-section">
            <h2>연락처 📞</h2>
            <div className="contact-card">
              <p>프로젝트 협업이나 기술 문의가 있으시면 언제든지 연락주세요!</p>
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <a href="mailto:unionday@naver.com" className="contact-link">unionday@naver.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💻</span>
                  <a href="https://github.com/Realkitkit" target="_blank" rel="noopener noreferrer" className="contact-link">
                    GitHub: @Realkitkit
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return <div>페이지를 찾을 수 없습니다.</div>;
    }
  };

  return (
    <div className="dashboard">
      <div className="dashboard-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard; 