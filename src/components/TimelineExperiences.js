import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon, Chip, List } from '@mui/material';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
function TimelineExperiences(props) {
  return (

    <div className='TimelineSection'>
      {/* <h1 id="Experiences"> Experiences</h1> */}
      <VerticalTimeline id='VerticalTimeline'>
        {props.data.map((element) => (
          <VerticalTimelineElement
          key={uuidv4()}
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#7395AE', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
            date={element.date}
            iconStyle={{ background: '#7395AE', color: '#fff' }}
            icon={<Icon>{element.icon}</Icon>}
          >
            <h3 className="vertical-timeline-element-title">{element.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{element.compagny}</h5>
            {element.keyResponsability.map((responsability) => (
              <List key={uuidv4()}>{responsability}</List>
            ))}
            <div>

              <div>
                {element.skills.map((skill) => (
                  <Chip key={uuidv4()} className="chip-skill" label={skill} />
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default TimelineExperiences;