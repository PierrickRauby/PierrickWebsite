
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
const Home = (data) => {

  return (
    <div className='vstach gap-3'>
      <Intro data={data.info} className='vertical-item' />
      <Timeline />
      <Projects/>
      <Skills/>
      <Footer/>
    </div>
  )

};

export default Home;


// 
// const SubComponent = ({ data }) => {
//   return (
//     <div>
//       <p>Info: {data && data.info}</p>
//       <p>Test: {data && data.test}</p>
//     </div>
//   );
// };