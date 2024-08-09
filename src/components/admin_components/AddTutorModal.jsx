import React, { useState } from 'react';
import '../../styles/AddTutorModal.css';

const AddTutorModal = ({ show, onClose, students, apiEndpoint }) => {
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
      student.firstname?.toLowerCase().includes(value) ||
      student.lastname?.toLowerCase().includes(value) ||
      student.email?.toLowerCase().includes(value)
    );
    setFilteredStudents(filtered);
  };

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);
    setSearchTerm(`${student.firstname} ${student.lastname}`);
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
      //calendlyUrl,
      email: selectedStudent.email,
    };

    try {
            //TODO: hit api
            const response = await fetch("http://127.0.0.1:8000/api/tutors/create/", {
                method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                alert('Tutor added successfully!');
            onClose();
            } else {
                alert('Failed to add tutor. Please try again.');
            }
        } catch (error) {
            alert('An error occurred. Please try again.');
            console.error('Error:', error);
        }
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
                  filteredStudents.map((student, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleStudentSelect(student)}
                    >
                      {`${student.firstname || "No Name"} ${student.lastname || ""} - ${student.email}`}
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
