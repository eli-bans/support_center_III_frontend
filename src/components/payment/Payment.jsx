// import libraries
import { PaystackButton } from "react-paystack";
import React, {useState} from 'react';

// import styles and images
import '../../styles/Payment.css';

function Payment ({amount, email, onSuccess, onClose, subaccount}) {

    const [isPayModalOpen, setIsPayModalOpen] = useState(true);
    const publicKey = 'pk_test_d0e03eb57ca549c4183788cab309e84b4f4067ad';
    var amount = amount * 100;

    const componentProps = {
        email,
        amount,
        currency: 'GHS', 
        publicKey,
        subaccount: subaccount,
        text: 'Pay Now',
        onSuccess: onSuccess,
        onClose: onClose,
    };

    const handleModalClose = () => {
        setIsPayModalOpen(false)
    }

    if(!isPayModalOpen) return null;

    return (
    
        <div className="payment-modal-overlay">
            <div className="payment-modal-content">
                <button className="close-button" onClick={onClose}>x</button>
                <h1>Pay for session</h1>
                <p>Kindly make a payment before you book a session with the tutor</p>
                <PaystackButton className="pay-button" {...componentProps} />
            </div>
        </div>
        
    )

}

export default Payment