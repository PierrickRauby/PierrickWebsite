import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ComputerIcon from '@mui/icons-material/Computer';
import SchoolIcon from '@mui/icons-material/School';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

function Timeline() {
  return (

<div>
<h1 id="HomeAboutSection">About me</h1>
<VerticalTimeline id='VerticalTimeline'>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    date="Oct. 2022 - present"
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    icon={<ComputerIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Senior Application Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">The MathWorks, Natick MA</h4>
    <p>
TODO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    date="March 2022 - Aug. 2022"
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    icon={<PrecisionManufacturingIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">FormLogic, Atlanta GA</h4>
    <p>
TODO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sept. 2018 - Dec. 2021"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">Ph.D Mechanical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">GeorgiaTech, Atlanta GA</h4>
    <p>
      Creative Direction, User Experience, Visual Design, SEO, Online Marketing
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sept. 2018 - Dec. 2021"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">M.Sc. Computer Science Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">GeorgiaTech, Atlanta GA</h4>
    <p>
     TODO 
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Sept. 2016 - Sept. 2018"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">M.Sc. Mechanical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">GeorgiaTech, Atlanta GA</h4>
    <p>
      TODO
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Sept. 2014 - Sept. 2018"
    contentStyle={{ background: '#7395AE', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
    iconStyle={{ background: '#7395AE', color: '#fff' }}
    icon={<SchoolIcon/>}
  >
    <h3 className="vertical-timeline-element-title">M.Sc. Mechanical Engineering</h3>
    <h4 className="vertical-timeline-element-subtitle">Arts Et Métiers ParisTech, Metz, France</h4>
    <p>
TODO
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>

</div>

  );
}

export default Timeline;