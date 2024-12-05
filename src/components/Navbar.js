import React, { useState, useEffect, useRef } from 'react';
import { HashLink } from 'react-router-hash-link';

const StickyNavbar = ({ onCarouselNavigate }) => {
  const [navbarBg, setNavbarBg] = useState('#8e8d8a');
  const navbarRef = useRef(null); // Reference to the navbar for dynamic height

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

  const handleNavClick = (index) => {
    if (onCarouselNavigate) {
      onCarouselNavigate(index);
    }
  };

  // Function to dynamically calculate the offset
  const scrollWithOffset = (el) => {
    const navbarHeight = navbarRef.current ? navbarRef.current.offsetHeight : 70; // Default to 70 if ref is null
    const y = el.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header
      ref={navbarRef} // Attach the ref to the navbar
      style={{
        position: 'sticky',
        top: 0,
        backgroundColor: navbarBg,
        transition: 'background-color 0.3s ease-in-out',
        zIndex: 999,
      }}
    >
      <nav>
        <ul>
          <li>
            <HashLink to="#IntroBackground" scroll={(el) => scrollWithOffset(el)}>
              Home
            </HashLink>
          </li>
          <li>
            <HashLink
              to="#ExperiencesAndEducation"
              scroll={(el) => scrollWithOffset(el)}
            >
              Journey
            </HashLink>
          </li>
          <li>
            <HashLink
              to="#Projects"
              onClick={() => handleNavClick(null)}
              scroll={(el) => scrollWithOffset(el)}
            >
              Projects
            </HashLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default StickyNavbar;
