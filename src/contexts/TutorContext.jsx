import React, { createContext, useState } from 'react';

export const TutorContext = createContext();

const initialTutors = [
    {
        id: 1,
        firstname: 'Main',
        lastname: 'Tutor',
        email: 'maintutor@gmail.com',
        password: 'P@$$w0rd',
        is_student: false,
        is_tutor: true,
        courses: ['AI', 'DS', 'WT'],
        year: 2025,
        calendly_link: 'https://calendly.com/palalasare/30min',
        rating: 4.5,
        profile_picture: null,
        about: "I like to help students pass and never fail. I am also a big fun of foo",
    },
    {
        id: 2,
        firstname: 'Jesse',
        lastname: 'Adjetey',
        email: 'maintutor1@gmail.com',
        password: 'P@$$w0rd',
        is_student: false,
        is_tutor: true,
        courses: ['WT', 'MS'],
        year: 2026,
        calendly_link: 'https://calendly.com/palalasare/30min',
        rating: 4.8,
        profile_picture: null,
        about: null,
    },
    {
        id: 3,
        firstname: 'Emily',
        lastname: 'Johnson',
        email: 'maintutor3@gmail.com',
        password: 'P@$$w0rd',
        is_student: false,
        is_tutor: true,
        courses: ['AI', 'WT'],
        year: 2027,
        calendly_link: 'https://calendly.com/palalasare/30min',
        rating: 4.7,
        profile_picture: null,
        about: null,
    },
    {
        id: 4,
        firstname: 'Elikem',
        lastname: 'Bansah',
        email: 'maintutor4@gmail.com',
        password: 'P@$$w0rd',
        is_student: false,
        is_tutor: true,
        courses: ['DS', 'MS'],
        year: 2025,
        calendly_link: 'https://calendly.com/palalasare/30min',
        rating: 4.6,
        profile_picture: null,
        about: null,
    },
];

export const TutorProvider = ({ children }) => {
    const [tutors, setTutors] = useState(initialTutors);

    const loginTutor = (email, password) => {
        return tutors.find(
            (tutor) => tutor.email === email && tutor.password === password
        );
    };

    return (
        <TutorContext.Provider value={{ tutors, loginTutor }}>
            {children}
        </TutorContext.Provider>
    );
};
