import React, { useState, useContext } from 'react';
import '../../styles/AddTutorModal.css';

import { TutorContext } from '../../contexts/TutorContext';
import { StudentContext } from '../../contexts/StudentContext';

const AddTutorModal = ({ show, onClose, studentUsers, apiEndpoint }) => {
  const { students, setStudents } = useContext(StudentContext);
  const { tutors, setTutors } = useContext(TutorContext);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [selectedYear, setSelectedYear] = useState('2025');
  const [calendlyUrl, setCalendlyUrl] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = students.filter(student =>
      student.email?.toLowerCase().includes(value)
    );
    setFilteredStudents(filtered);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setSearchTerm(student.email);
    setFilteredStudents([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedStudent) {
      alert('Please select a student from the search results.');
      return;
    }

    const payload = {
      firstname: firstName,
      lastname: lastName,
      year: selectedYear,
      calendlyUrl,
      email: selectedStudent.email,
    };

    const newTutor = {
      ...selectedStudent,
      is_student: false,
      is_tutor: true,
      year: selectedYear,
      calendly_link: calendlyUrl,
    };

    // Remove the student from the StudentContext
    const updatedStudents = students.filter(student => student.id !== selectedStudent.id);
    setStudents(updatedStudents);

    setTutors([...tutors, newTutor]);
    alert('Tutor added successfully!');
    onClose();
  };

  if (!show) return null;

  return (
    <div className="tutor-modal-overlay">
      <div className="tutor-modal-content">
        <h2>Add Tutor</h2>
        <p>Add a new tutor to the platform</p>
        <button className="close-btn" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <div className="input-row">
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            {/* Dropdown for years */}
            <select 
              value={selectedYear} 
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
            </select>
          </div>
          
          <input
            name="calendly"
            className="calendly"
            type="text"
            placeholder="Calendly URL (web link)"
            value={calendlyUrl}
            onChange={(e) => setCalendlyUrl(e.target.value)}
          />

          <div className="search-container">
            <input
              type="text"
              placeholder="Student name or email"
              value={searchTerm}
              onChange={handleSearch}
            />
            {searchTerm && (
              <div className="search-dropdown">
                {filteredStudents.length ? (
                  filteredStudents.map((student, _) => (
                    <div
                      key={student.id}
                      className="dropdown-item"
                      onClick={() => handleStudentSelect(student)}
                    >
                      {student.email}
                    </div>
                  ))
                ) : (
                  <div className="dropdown-item">No results found</div>
                )}
              </div>
            )}
          </div>

          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
};

export default AddTutorModal;
