import React, { useState } from 'react';
import EducationForm from './EducationForm';

const Dashboard = () => {
  const [educationList, setEducationList] = useState([]);

  // Handler to add new education
  const addEducation = (education) => {
    setEducationList([...educationList, education]);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <EducationForm onAddEducation={addEducation} />

      <h2>Your Education</h2>
      {educationList.length === 0 ? (
        <p>No education added yet.</p>
      ) : (
        <ul>
          {educationList.map((edu, index) => (
            <li key={index}>
              {edu.degree} from {edu.school} ({edu.year})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dashboard;

