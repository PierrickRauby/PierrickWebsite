import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Projects from './Projects'
import TimelineExperiences from './TimelineExperiences';
import TimelineEducation from './TimelineEducation';

function Draft(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  console.log(props);
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 id="Projects1" class="color-black">Project1</h3>
      <TimelineExperiences data={props.data.resume.experience}/>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption>
          <h3 id="Projects2" class="color-black">Project2</h3>
      <TimelineEducation data={props.data.resume.education}/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Draft;