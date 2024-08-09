import React, { createContext, useState } from 'react';

export const StudentContext = createContext();

const initialStudents = [
    {
        id: 1,
        email: 'pinopalal11@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: null,
    },
    {
        id: 2,
        email: 'palalasare@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: null,
    },
    {
        id: 3,
        email: 'elikembansah1@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: null,
    },
    {
        id: 4,
        email: 'student4@example.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: null,
    },
    {
        id: 5,
        email: 'jesseadjetey@gmail.com',
        password: 'P@$$w0rd',
        is_student: true,
        is_tutor: false,
        profile_picture: null,
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
        <StudentContext.Provider value={{ students, loginStudent}}>
            {children}
        </StudentContext.Provider>
    );
};
