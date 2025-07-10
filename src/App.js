import React, { useState, useRef, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [activeExperience, setActiveExperience] = useState('inotium');
  const dashboardRef = useRef(null);
  const sectionsRef = useRef({});

  const sections = ['about', 'experience', 'skills', 'security', 'contact'];

  // 섹션이 변경될 때 해당 위치로 스크롤
  const scrollToSection = (sectionId) => {
    const sectionElement = sectionsRef.current[sectionId];
    if (sectionElement && dashboardRef.current) {
      dashboardRef.current.scrollTo({
        top: sectionElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // 스크롤 위치에 따라 현재 섹션 감지 (자연스러운 무한스크롤)
  useEffect(() => {
    const dashboardElement = dashboardRef.current;
    if (!dashboardElement) return;

    const handleScroll = () => {
      const scrollTop = dashboardElement.scrollTop;
      const containerHeight = dashboardElement.clientHeight;
      
      let currentSection = sections[0];
      
      // 각 섹션의 위치를 확인하여 현재 보이는 섹션 찾기
      for (let i = 0; i < sections.length; i++) {
        const sectionElement = sectionsRef.current[sections[i]];
        if (sectionElement) {
          const sectionTop = sectionElement.offsetTop;
          const sectionHeight = sectionElement.offsetHeight;
          
          // 섹션의 절반 이상이 보이면 해당 섹션을 활성화
          if (scrollTop >= sectionTop - containerHeight / 2 && 
              scrollTop < sectionTop + sectionHeight - containerHeight / 2) {
            currentSection = sections[i];
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // 자연스러운 스크롤만 허용 (휠 이벤트 제거)
    dashboardElement.addEventListener('scroll', handleScroll);

    return () => {
      dashboardElement.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection, sections]);

  // 사이드바에서 클릭했을 때 해당 섹션으로 이동
  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <div className="app">
      <Header />
      <div className="app-body">
        <Sidebar 
          activeSection={activeSection} 
          setActiveSection={handleSectionChange}
          activeExperience={activeExperience}
          setActiveExperience={setActiveExperience}
        />
        <main className="main-content">
          <Dashboard 
            activeSection={activeSection} 
            activeExperience={activeExperience}
            dashboardRef={dashboardRef}
            sectionsRef={sectionsRef}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App; 