import React from 'react';
import { InlineWidget } from 'react-calendly';
import '../../styles/BookingModal.css';

const BookingModal = ({ isOpen, onClose, calendlyUrl }) => {
    if (!isOpen) return null;

    return (
        <div className="booking-modal-overlay">
            <div className="booking-modal-content">
                <button className="close-button" onClick={onClose}>x</button>
                <InlineWidget 
                    url={calendlyUrl}
                    styles={{ height: '700px' }}
                />
            </div>
        </div>
    );
};

export default BookingModal;
