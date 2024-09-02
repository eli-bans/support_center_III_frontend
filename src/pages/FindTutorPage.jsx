// import packages
import React, { useState, useEffect, useContext } from 'react';

// import styles and images
import '../styles/FindTutorPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DefaultImage from '../assets/default_image.jpg';
import TutorTile from '../components/find_tutor/TutorTile';
import FilterPane from '../components/find_tutor/FilterPane';
import Footer from '../components/Footer';
import Modal from '../components/find_tutor/Modal';
import BookingModal from '../components/find_tutor/BookingModal';
import Payment from '../components/payment/Payment';
import { TutorContext } from '../contexts/TutorContext';

function FindTutorPage () {
    const { tutors } = useContext(TutorContext);
    const [filters, setFilters] = useState({ subject: '', year: '' });
    const [filteredTutors, setFilteredTutors] = useState(tutors);
    const [searchTerm, setSearchTerm] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTutor, setSelectedTutor] = useState(null);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedCalendlyUrl, setSelectedCalendlyUrl] = useState('');
    const [isPaid, setIsPaid] = useState(false);

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
    const openBookingModal = (tutor) => {
        setSelectedCalendlyUrl(tutor.calendly_link);
        setSelectedTutor(tutor);
        setIsBookingModalOpen(true);
        console.log('working');
    };

    // Modal for closing the schedule modal
    const closeBookingModal = () => {
        setIsBookingModalOpen(false);
        setSelectedTutor(null);
        setSelectedCalendlyUrl('');
    };

    // Payment success
    const handlePaymentSuccess = () => {
        setIsPaid(true);
    };

    // Payment error or close
    const handlePaymentClose = () => {
        setIsBookingModalOpen(false);
        console.log('Payment closed');
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
                                    image_path={tutor.profile_picture || DefaultImage}
                                    stars={tutor.rating}
                                    year={tutor.year}
                                    onViewProfile={() => openModal(tutor)}
                                    onScheduleMeeting={() => openBookingModal(tutor)}
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
            {isBookingModalOpen && (
                isPaid ? (
                    <BookingModal
                        isOpen={isBookingModalOpen}
                        onClose={closeBookingModal}
                        calendlyUrl={selectedCalendlyUrl}
                    />
                 ) : (
                    <Payment 
                        amount={50}
                        email={selectedTutor.email}
                        onSuccess={handlePaymentSuccess}
                        onClose={handlePaymentClose}
                        subaccount={selectedTutor.subaccount}
                    />
                 )
            )}
        </>
    )

}

export default FindTutorPage