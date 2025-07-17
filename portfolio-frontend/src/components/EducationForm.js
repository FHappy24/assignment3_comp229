import React, { useState } from 'react';

const EducationForm = ({ onAddEducation }) => {
  const [school, setSchool] = useState('');
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!school || !degree || !year) {
      alert('Please fill in all fields');
      return;
    }

    // Pass new education object to parent handler
    onAddEducation({ school, degree, year });

    // Reset form
    setSchool('');
    setDegree('');
    setYear('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Education</h2>
      <div>
        <label>School: </label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
          placeholder="School name"
        />
      </div>
      <div>
        <label>Degree: </label>
        <input
          type="text"
          value={degree}
          onChange={(e) => setDegree(e.target.value)}
          placeholder="Degree or qualification"
        />
      </div>
      <div>
        <label>Year: </label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="Graduation year"
        />
      </div>
      <button type="submit">Add Education</button>
    </form>
  );
};

export default EducationForm;
