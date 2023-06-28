
import React from 'react';
// import ControlledCarousel from './ControlledCarousel';
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Timeline from './Timeline';
// import VerticalTimeline from './VerticalTimeline';
import Timeline from './Timeline';
import Intro from './Intro';
import Projects from './Projects'
import Contact from './Contact'
const Home = () => {

  return (
    <div className='vstach gap-3'>
      <Intro className='vertical-item' />
      <Timeline/>
      <Projects/>
      <Contact/>
    </div>
  )

};

export default Home;
