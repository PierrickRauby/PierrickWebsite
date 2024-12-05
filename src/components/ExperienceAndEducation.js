import { useState } from 'react';
import Timeline from './Timeline';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';

function ExperienceAndEducation(props) {
  // State to track the switch status
  const [isEducation, setIsEducation] = useState(true);

  // Handle switch change
  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setIsEducation(isChecked);
  };

  const CustomSwitch = styled(Switch)(({ theme }) => ({
    width: 60, // Standard track width
    height: 24, // Reduced track height
    padding: 0,
    '& .MuiSwitch-switchBase': {
      margin: 0,
      padding: 0,
      transform: 'translateX(4px)', // Align thumb when unchecked
      '&.Mui-checked': {
        transform: 'translateX(32px)', // Align thumb when checked
        '& + .MuiSwitch-track': {
          backgroundColor: '#8e8d8a', // Background for checked state
          opacity: 1,
        },
      },
      '& svg':{
        fontSize: 22, // Icon size larger than the thumb
        color: '#ffffff', // Icon color
      },
    },
    '& .Mui-checked':{
      alignItems: 'center', // Vertically centers the icon
      justifyContent: 'center', // Horizontally centers the icon
      '& svg': {
        fontSize: 22, // Icon size larger than the thumb
        color: '#ffffff', // Icon color
      }
    },
    '& .MuiSwitch-thumb': {
      width: 20, // Thumb size to match track
      height: 20,
      display: 'flex',
      alignItems: 'center', // Vertically centers the icon
      justifyContent: 'center', // Horizontally centers the icon
      backgroundColor: '#7395AE', // Thumb background color
      '& svg': {
        color: '#ffffff', // Icon color
      }
    },
    '& .MuiSwitch-track': {
      borderRadius: 12, // Adjusted to match smaller track height
      backgroundColor: '#8e8d8a', // Neutral background for inactive state
      opacity: 1,
    },
  }));

  return (
    <div id="Journey">
      <h1 >Experiences & Education</h1>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', margin: '20px 0' }}>
        <CustomSwitch
          checked={isEducation}
          onChange={handleChange}
          icon={<WorkIcon />} // Icon for education side
          checkedIcon={<SchoolIcon />} // Icon for software side
        />
      </div>
      {/* Conditionally render the timeline based on the switch state */}
      {isEducation ? (
        <Timeline data={props.data.resume.education} />
      ) : (
        <Timeline data={props.data.resume.experience} />
      )}
    </div>
  );
}

export default ExperienceAndEducation;
