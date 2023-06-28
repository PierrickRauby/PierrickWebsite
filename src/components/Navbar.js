import React from 'react';
// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import zIndex from '@mui/material/styles/zIndex';

const StickyNavbar = () => {
  const [navbarBg, setNavbarBg] = useState('#8e8d8a');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setNavbarBg('#333'); // Change the color to your desired value
      } else {
        setNavbarBg('#8e8d8a');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: navbarBg,
        transition: 'background-color 0.3s ease-in-out',
        zIndex:999
      }}
    >
      <nav>
        <ul>
          <li>
            <a href="/#">Home</a>
          </li>
          <li>
            <a href="/#HomeAboutSection">About</a>
          </li>
          <li>
            <a href="/#HomeProjectSection">Projects</a>
          </li>
          <li>
            <a href="/#HomeContactSection">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StickyNavbar;