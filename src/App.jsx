// Mexico logo styled wrapper
const MexicoLogoWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

function MexicoLogo() {
  // Only the flag, centered
  return (
    <svg width="160" height="90" viewBox="0 0 160 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Flag */}
      <rect x="0" y="18" width="72" height="54" rx="8" fill="#fff" stroke="#222" strokeWidth="2.5" />
      <rect x="0" y="18" width="24" height="54" rx="8" fill="#006341" />
      <rect x="48" y="18" width="24" height="54" rx="8" fill="#ce1126" />
      {/* Simple eagle emblem (stylized) */}
      <ellipse cx="36" cy="45" rx="7" ry="8" fill="#b48a3c" stroke="#7a5a1e" strokeWidth="1.2" />
      <ellipse cx="36" cy="49" rx="4.4" ry="2.4" fill="#7a5a1e" />
    </svg>
  );
}
const TelescopeWrapper = styled(motion.div)`
  width: 120px;
  margin: 0 auto 1.5rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TelescopeSVG() {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tripod legs */}
      <rect x="38" y="45" width="6" height="20" rx="3" fill="#888" />
      <rect x="76" y="45" width="6" height="20" rx="3" fill="#888" />
      <rect x="57" y="45" width="6" height="20" rx="3" fill="#aaa" />
      {/* Telescope body */}
      <rect x="40" y="20" width="40" height="14" rx="7" fill="#b0c4de" stroke="#4a6fa5" strokeWidth="2" />
      {/* Eyepiece */}
      <rect x="78" y="25" width="12" height="4" rx="2" fill="#4a6fa5" />
      {/* Lens */}
      <circle cx="40" cy="27" r="7" fill="#fff" stroke="#4a6fa5" strokeWidth="2" />
      {/* Details */}
      <rect x="50" y="24" width="6" height="2" rx="1" fill="#4a6fa5" />
      <rect x="62" y="28" width="8" height="2" rx="1" fill="#4a6fa5" />
    </svg>
  );
}
const LogoWrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

function FesiaLogo() {
  return (
    <svg width="260" height="60" viewBox="0 0 260 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="48" fontFamily="'Orbitron', 'Arial', sans-serif" fontWeight="bold" fontSize="48" fill="#00d8ff" letterSpacing="8" style={{filter:'drop-shadow(0 0 8px #00d8ff88)'}}>
        FESIA
      </text>
      <defs>
        <style>
          {`@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap');`}
        </style>
      </defs>
    </svg>
  );
}
const Mars = styled(motion.div)`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #c1440e;
  box-shadow: 0 0 30px 8px #c1440e;
  left: 80vw;
  top: 20vh;
  z-index: 1;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 30px;
    top: 20px;
    background: #a13a08;
    border-radius: 50%;
    opacity: 0.5;
  }
  &::before {
    content: '';
    position: absolute;
    width: 7px;
    height: 7px;
    left: 10px;
    top: 10px;
    background: #a13a08;
    border-radius: 50%;
    opacity: 0.4;
  }
`;

const Satellite = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 40px;
  left: 60vw;
  top: 10vh;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SatelliteSVG() {
  return (
    <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Main body */}
      <rect x="35" y="15" width="10" height="10" rx="2" fill="#bbb" stroke="#888" strokeWidth="1.5" />
      {/* Solar panels */}
      <rect x="15" y="17" width="18" height="6" rx="2" fill="#3a7ca5" stroke="#2a4d69" strokeWidth="1" />
      <rect x="47" y="17" width="18" height="6" rx="2" fill="#3a7ca5" stroke="#2a4d69" strokeWidth="1" />
      {/* Trusses */}
      <rect x="33" y="19" width="2" height="2" fill="#888" />
      <rect x="45" y="19" width="2" height="2" fill="#888" />
      {/* Antenna */}
      <rect x="39" y="10" width="2" height="5" fill="#888" />
      <circle cx="40" cy="10" r="2" fill="#e74c3c" />
    </svg>
  );
}

import { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const darkTheme = {
  background: '#0a0a23',
  color: '#fff',
  accent: '#00d8ff',
  planet: '#ffb347',
  star: '#fff',
};
const lightTheme = {
  background: '#e6f0ff',
  color: '#0a0a23',
  accent: '#0057b7',
  planet: '#ffb347',
  star: '#ffd700',
};

const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    transition: background 0.5s, color 0.5s;
  }
`;

const Space = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  letter-spacing: 0.1em;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.accent};
`;

const ThemeToggle = styled.button`
  background: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 20px;
  padding: 0.5em 1.5em;
  font-size: 1.1rem;
  cursor: pointer;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  transition: background 0.3s, color 0.3s;
`;

const Star = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: ${({ theme }) => theme.star};
  opacity: 0.8;
`;


const Planet = styled(motion.div)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${({ theme }) => theme.planet};
  box-shadow: 0 0 40px 10px ${({ theme }) => theme.planet};
  left: 70vw;
  top: 60vh;
`;

const Saturn = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 15vw;
  top: 70vh;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function SaturnSVG() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Saturn body */}
      <ellipse cx="40" cy="40" rx="24" ry="22" fill="#e0c97f" stroke="#bfa94a" strokeWidth="2" />
      {/* Saturn rings */}
      <ellipse cx="40" cy="44" rx="36" ry="10" fill="none" stroke="#bfa94a" strokeWidth="4" opacity="0.7" />
      <ellipse cx="40" cy="44" rx="32" ry="8" fill="none" stroke="#fff2b2" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}



const Moon = styled(motion.div)`
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #e0e0e0;
  box-shadow: 0 0 60px 10px #e0e0e0;
  left: 10vw;
  top: 10vh;
  z-index: 1;
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    left: 20px;
    top: 30px;
    background: #cccccc;
    border-radius: 50%;
    opacity: 0.5;
  }
  &::before {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    left: 50px;
    top: 15px;
    background: #cccccc;
    border-radius: 50%;
    opacity: 0.4;
  }
`;

function Stars({ count = 40 }) {
  const stars = Array.from({ length: count }, (_, i) => ({
    id: i,
    top: Math.random() * 100 + 'vh',
    left: Math.random() * 100 + 'vw',
    duration: 2 + Math.random() * 3,
  }));
  return stars.map(star => (
    <Star
      key={star.id}
      style={{ top: star.top, left: star.left }}
      animate={{ opacity: [0.2, 1, 0.2] }}
      transition={{ duration: star.duration, repeat: Infinity, repeatType: 'loop' }}
    />
  ));
}

function App() {
  const [theme, setTheme] = useState('dark');
  const themeObj = theme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={themeObj}>
      <GlobalStyle />
      <Space>
        <Stars count={50} />
        <Mars
          animate={{
            y: [0, 10, 0],
            x: [0, -5, 0],
            boxShadow: [
              '0 0 30px 8px #c1440e',
              '0 0 40px 12px #c1440e',
              '0 0 30px 8px #c1440e',
            ],
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <Satellite
          animate={{
            x: [0, 10, 0],
            y: [0, 5, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SatelliteSVG />
        </Satellite>
        <Moon
          animate={{
            y: [0, 10, 0],
            boxShadow: [
              '0 0 60px 10px #e0e0e0',
              '0 0 80px 20px #e0e0e0',
              '0 0 60px 10px #e0e0e0',
            ],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <Planet
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
            boxShadow: [
              `0 0 40px 10px ${themeObj.planet}`,
              `0 0 60px 20px ${themeObj.planet}`,
              `0 0 40px 10px ${themeObj.planet}`,
            ],
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <Saturn
          animate={{
            y: [0, 15, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SaturnSVG />
        </Saturn>
        <LogoWrapper>
          <FesiaLogo />
        </LogoWrapper>
        <MexicoLogoWrapper>
          <MexicoLogo />
        </MexicoLogoWrapper>
       
       
      </Space>
    </ThemeProvider>
  );
}

export default App;

