import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon, Chip, List } from '@mui/material';
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
function Timeline(props) {
  return (

    <div className='TimelineSection'>
      <h1 id="HomeAboutSection">About me</h1>
      <VerticalTimeline id='VerticalTimeline'>
        {props.data.map((experience) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#7395AE', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #7395AE' }}
            date={experience.dateStart + " - " + experience.dateEnd}
            iconStyle={{ background: '#7395AE', color: '#fff' }}
            icon={<Icon>{experience.icon}</Icon>}
          >
            <h3 className="vertical-timeline-element-title">{experience.title}</h3>
            <h5 className="vertical-timeline-element-subtitle">{experience.compagny}</h5>
            {experience.keyResponsability.map((responsability) => (
              <List>{responsability}</List>
            ))}
            <div>

              <div>
                {experience.skills.map((skill) => (
                  <Chip className="chip-skill" label={skill} />
                ))}
              </div>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}

export default Timeline;