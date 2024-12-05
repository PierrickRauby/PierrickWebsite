import React, { useState } from 'react';
import Intro from './Intro';
// import TimelineExperiences from './TimelineExperiences';
// // import TimelineEducation from './TimelineEducation';
import Projects from './Projects';
import ExperienceAndEducation from './ExperienceAndEducation';
import Footer from './Footer';
import StickyNavbar from './Navbar';

const Home = (props) => {
  // State to manage the current carousel index
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Handler to update the carousel index when navigating from the navbar
  const handleCarouselNavigate = (index) => {
    if (index !== null && index !== undefined) {
      setCarouselIndex(index);
    }
  };

  return (
    <div className="vstack gap-3">
      {/* Sticky Navbar with carousel navigation handler */}
      {/* <StickyNavbar onCarouselNavigate={handleCarouselNavigate} /> */}

      {/* Intro Section */}
      <Intro info={props.resumeData.info} className="vertical-item" />

      {/* Experience & Education Section Section */}
      <ExperienceAndEducation onIndexChange={setCarouselIndex} data={props.resumeData} />
      
      {/* Projects Section */}
      <Projects />


      {/* Footer Section */}
      <Footer data={props.resumeData.info} />
    </div>
  );
};

export default Home;
