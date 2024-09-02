import React, { createContext, useState } from 'react';
import PalalProfile from '../assets/palal-profile.jfif';
import JesseProfile from '../assets/jesse-profile.jfif';
import DefaultImage from '../assets/default_image.jpg';

export const StudentContext = createContext();

const initialStudents = [
    {
        id: 1,
        email: 'pinopalal11@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: PalalProfile,
    },
    {
        id: 2,
        email: 'palalasare@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: "https://media.licdn.com/dms/image/C4D03AQE8069RrctjJA/profile-displayphoto-shrink_800_800/0/1654645201490?e=1728518400&v=beta&t=3-7ApBACbhc6L55_eCSrsHbWe-o3pLBYOHEkDRLMpm0",
    },
    {
        id: 3,
        email: 'elikembansah1@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: "https://media.licdn.com/dms/image/C4D03AQE8069RrctjJA/profile-displayphoto-shrink_800_800/0/1654645201490?e=1728518400&v=beta&t=3-7ApBACbhc6L55_eCSrsHbWe-o3pLBYOHEkDRLMpm0",
    },
    {
        id: 4,
        email: 'student4@example.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: DefaultImage,
    },
    {
        id: 5,
        email: 'jesseadjetey@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: JesseProfile,
    },
];

export const StudentProvider = ({ children }) => {
    const [students, setStudents] = useState(initialStudents);

    const loginStudent = (email, password) => {
        return students.find(
            (student) => student.email === email && student.password === password
        );
    };

    return (
        <StudentContext.Provider value={{ students, loginStudent, setStudents}}>
            {children}
        </StudentContext.Provider>
    );
};
