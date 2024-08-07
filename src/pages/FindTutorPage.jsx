// import packages
import React, { useState, useEffect } from 'react';

// import styles and images
import '../styles/FindTutorPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProfileImage from '../assets/profile-image.png'
import TutorTile from '../components/find_tutor/TutorTile';
import FilterPane from '../components/find_tutor/FilterPane';
import Footer from '../components/Footer';
import Modal from '../components/find_tutor/Modal';
import BookingModal from '../components/find_tutor/BookingModal';

// Tutor call structure
const tutors = [
    { id: 1, firstname: "Palal", lastname: "Asare", courses: ["Chemistry", "Data Structures & Algorithms"], image_path: ProfileImage, stars: 5, year: 2025, calendlyUrl: "https://calendly.com/palalasare/30min" },
    { id: 2, firstname: "Jane", lastname: "Doe", courses: ["Mathematics", "Physics"], image_path: ProfileImage, stars: 4, year: 2023, calendlyUrl: "https://calendly.com/palalasare/30min" },
    { id: 3, firstname: "John", lastname: "Smith", courses: ["English", "History"], image_path: ProfileImage, stars: 5, year: 2024, calendlyUrl: "https://calendly.com/palalasare/30min" },
];

function FindTutorPage () {
    const [filters, setFilters] = useState({ subject: '', year: '' });
    const [filteredTutors, setFilteredTutors] = useState(tutors);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState('');

    // Apply filters whenever filters state changes
    useEffect(() => {
        const { subject, year } = filters;
        const filtered = tutors.filter(tutor => {
            const matchesSubject = subject ? tutor.courses.includes(subject) : true;
            const matchesYear = year ? tutor.year === year : true;
            const matchesSearchTerm = searchTerm ? 
                tutor.firstname.toLowerCase().includes(searchTerm.toLowerCase()) || 
                tutor.lastname.toLowerCase().includes(searchTerm.toLowerCase()) : true;
            return matchesSubject && matchesYear && matchesSearchTerm;
        });
        setFilteredTutors(filtered);
    }, [filters, searchTerm]);

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

    // Handle search of tutors
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle showing modal
    const openModal = (tutor) => {
        setSelectedTutor(tutor);
        setIsModalOpen(true);
    }

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedTutor(null);
    };

    // Modal for booking a meeting
    const openBookingModal = (calendlyUrl) => {
        setSelectedCalendlyUrl(calendlyUrl);
        setIsBookingModalOpen(true);
    };

    // Modal for closing the schedule modal
    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
        setSelectedCalendlyUrl('');
    };

    return (
        <>
            <div className="find-tutor">
                <div className="search-section">
                    <div className="search-field">
                        <div className="search-entry">
                            <FontAwesomeIcon className='lead-icons' icon="fa-solid fa-search"/>
                            <input 
                                type='text'
                                id='search' 
                                placeholder='Search'
                                value={searchTerm}
                                onChange={handleSearchChange} 
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
                                    onViewProfile={() => openModal(tutor)}
                                    onScheduleMeeting={() => openBookingModal(tutor.calendlyUrl)}
                                />
                            ))}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* Open modal to view profile */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                user={selectedTutor}
            />

            {/* Open booking modal to view profile */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={closeBookingModal}
                calendlyUrl={selectedCalendlyUrl}
            />
        </>
    )

}

export default FindTutorPage