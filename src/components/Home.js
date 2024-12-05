import React from 'react';
import Intro from './Intro';
import Projects from './Projects';
import ExperienceAndEducation from './ExperienceAndEducation';
import Footer from './Footer';

const Home = (props) => {
  return (
    <div className="vstack gap-3">
      {/* Intro Section */}
      <Intro info={props.resumeData.info} className="vertical-item" />

      {/* Experience & Education Section Section */}
      <ExperienceAndEducation  data={props.resumeData} />
      
      {/* Projects Section */}
      <Projects />

      {/* Footer Section */}
      <Footer data={props.resumeData.info} />
    </div>
  );
};

export default Home;
