// pages/Users.js
import React, { useState } from 'react';
import './styles/Users.css';
import {useNavigate} from "react-router-dom";

const Users = () => {
    const initialUsers = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com' },
        { id: 3, name: 'Emily Smith', email: 'emily.smith@example.com' },
        { id: 4, name: 'Michael Johnson', email: 'michael.johnson@example.com' },
    ];

    const navigate = useNavigate();
    const [users, setUsers] = useState(initialUsers);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const handleAddUser = () => {
        navigate('/add-users')
    }

    return (
        <div className="users-container">
            <div className="navbar">
                <input
                    type="text"
                    placeholder="Search users..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
                <button onClick={handleAddUser}>Add User</button>
            </div>
            <h2>User List</h2>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {filteredUsers.map(user => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;
