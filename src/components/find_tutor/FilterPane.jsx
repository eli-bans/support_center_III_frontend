// FilterComponent.js
import React, { useState } from 'react';

// import styles and images
import '../../styles/FilterPane.css';

function FilterComponent({ onFilterChange }) {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const subjects = [
    'Introduction to AI',
    'Data Structures & Algorithms',
    'Web Technologies',
    'Modelling & Simulation',
    'Headphone'
  ];

  const years = [2025, 2026, 2027];

  // For when a subject is selected
  const handleSubjectChange = (subject) => {
    setSelectedSubject(subject);
    onFilterChange({ subject, year: selectedYear });
  };

  // For when a year group is selected
  const handleYearChange = (year) => {
    setSelectedYear(year);
    onFilterChange({ subject: selectedSubject, year });
  };

  return (
    <div className="filter-component">
      <div className="subject-filter">
        <p className='title'>SUBJECT</p>
        {subjects.map(subject => (
          <div key={subject}>
            <input
              type="radio"
              id={subject}
              name="subject"
              value={subject}
              checked={selectedSubject === subject}
              onChange={() => handleSubjectChange(subject)}
            />
            <label htmlFor={subject}>{subject}</label>
          </div>
        ))}
      </div>

      <hr className='separator-bar'/>
      
      <div className="year-filter">
        <p className='title'>YEAR</p>
        {years.map(year => (
          <div key={year}>
            <input
              type="radio"
              id={`year-${year}`}
              name="year"
              value={year}
              checked={selectedYear === year}
              onChange={() => handleYearChange(year)}
            />
            <label htmlFor={`year-${year}`}>{year}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilterComponent;
