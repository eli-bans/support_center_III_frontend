// import packages
import React, { useState, useEffect } from 'react';

// import styles and images
import '../styles/FindTutorPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from '../assets/profile-image.png'
import TutorTile from '../components/find_tutor/TutorTile';
import FilterPane from '../components/find_tutor/FilterPane';

// Tutor call structure
const tutors = [
    { id: 1, firstname: "Palal", lastname: "Asare", courses: ["Chemistry", "Data Structures & Algorithms"], image_path: ProfileImage, stars: 5, year: 2025 },
    { id: 2, firstname: "Jane", lastname: "Doe", courses: ["Mathematics", "Physics"], image_path: ProfileImage, stars: 4, year: 2023 },
    { id: 3, firstname: "John", lastname: "Smith", courses: ["English", "History"], image_path: ProfileImage, stars: 5, year: 2024 },
];

function FindTutorPage () {
    const [filters, setFilters] = useState({ subject: '', year: '' });
    const [filteredTutors, setFilteredTutors] = useState(tutors);

    // Apply filters whenever filters state changes
    useEffect(() => {
        const { subject, year } = filters;
        const filtered = tutors.filter(tutor => {
            const matchesSubject = subject ? tutor.courses.includes(subject) : true;
            const matchesYear = year ? tutor.year === year : true;
            return matchesSubject && matchesYear;
        });
        setFilteredTutors(filtered);
    }, [filters]);

    // Filter data when user selects filter choice
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    // Handle the removal of a filter
    const removeFilter = (filterType) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: ''
        }));
    };

    return (
        <div className="find-tutor">
            <div className="search-section">
                <div className="search-field">
                    <div className="search-entry">
                        <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-search"/>
                        <input 
                            type='text'
                            id='search' 
                            placeholder='Search' 
                        />
                    </div>
                </div>
            </div>
            <div className="results-section">
                <div className="stats">
                    <div className="active-filters">
                        <p>Active Filters: </p>
                        {filters.subject && (
                            <div className="filter-chip">
                                {filters.subject} <button onClick={() => removeFilter('subject')}>x</button>
                            </div>
                        )}
                        {filters.year && (
                            <div className="filter-chip">
                                {filters.year} <button onClick={() => removeFilter('year')}>x</button>
                            </div>
                        )}
                    </div>
                    <div className="filter-count">
                        {filteredTutors.length} <span>Tutors found</span>
                    </div>
                </div>
                <div className="section-content">
                    <div className="filter">

                        {/* Component to handle the filtering of tutors */}
                        <FilterPane onFilterChange={handleFilterChange}/>

                    </div>
                    <div className="list-items">

                        {/* Display tutor tile based on the filtering results */}
                        {filteredTutors.map(tutor => (
                            <TutorTile
                                key={tutor.id}
                                firstname={tutor.firstname}
                                lastname={tutor.lastname}
                                courses={tutor.courses}
                                image_path={tutor.image_path}
                                stars={tutor.stars}
                                year={tutor.year}
                            />
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )

}

export default FindTutorPage