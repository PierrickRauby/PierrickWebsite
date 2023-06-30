
import React from 'react';
// import ControlledCarousel from './ControlledCarousel';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Timeline from './Timeline';
// import VerticalTimeline from './VerticalTimeline';
import Timeline from './Timeline';
import Intro from './Intro';
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
const Home = () => {

  return (
    <div className='vstach gap-3'>
      <Intro className='vertical-item' />
      <Timeline/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )

};

export default Home;
