import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

const initialAdmin = [{
    id: 1,
    email: 'mainadmin@gmail.com',
    password: 'P@$$w0rd',
    is_student: false,
    is_tutor: false,
    profile_picture: ''
}, {
    id: 1,
    email: 'secondadmin@gmail.com',
    password: 'P@$$w0rd',
    is_student: false,
    is_tutor: false,
    profile_picture: ''
}];

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(initialAdmin);

    const loginAdmin = (email, password) => {
        return admin.find(
            (adm) => adm.email === email && adm.password === password
        );
    };

    return (
        <AdminContext.Provider value={{ admin, loginAdmin}}>
            {children}
        </AdminContext.Provider>
    );
};
