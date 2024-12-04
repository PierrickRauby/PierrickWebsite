import React from 'react';
import Intro from './Intro';
import TimelineExperiences from './TimelineExperiences';
import TimelineEducation from './TimelineEducation';
import Projects from './Projects'
// import Skills from './Skills'
import Draft from './Draft'
import Footer from './Footer'
const Home = (props) => {

  return (
    <div className='vstach gap-3'>
      <Intro info={props.resumeData.info} className='vertical-item' />
      {/* <Draft data={props.resumeData}/> */}
      <TimelineExperiences data={props.resumeData.resume.experience}/>
      <Projects/>
      <TimelineEducation data={props.resumeData.resume.education}/>
      {/* <Skills/> */}
      <Footer data={props.resumeData.info}/>
    </div>
  )

};

export default Home;
