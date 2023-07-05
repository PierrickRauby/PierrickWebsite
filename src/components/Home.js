import React from 'react';
import Intro from './Intro';
import Timeline from './Timeline';
import Projects from './Projects'
import Skills from './Skills'
import Footer from './Footer'
const Home = (props) => {

  return (
    <div className='vstach gap-3'>
      <Intro info={props.resumeData.info} className='vertical-item' />
      <Timeline data={props.resumeData.resume.experience}/>
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )

};

export default Home;
