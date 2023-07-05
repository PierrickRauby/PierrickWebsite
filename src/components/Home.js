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