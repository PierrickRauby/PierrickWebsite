import React from 'react';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
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
            <HashLink to="#IntroBackground">Home</HashLink>
          </li>
          <li>
            {/* <a href="#HomeAboutSection">About</a> */}
            <HashLink to="#HomeAboutSection">About</HashLink>
          </li>
          <li>
            {/* <a href="#HomeProjectSection">Projects</a> */}
            <HashLink to="#HomeProjectSection">About</HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StickyNavbar;