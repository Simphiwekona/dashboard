// pages/AddUsers.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/AddUsers.css'; // Import the CSS file for AddUsers component

const AddUsers = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [role, setRole] = useState('User'); // Default role is 'User'

    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleRoleChange = (e) => {
        setRole(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you can add the logic to save the new user
        // For now, just navigate back to Users page
        navigate('/');
    };

    const handleCancel = () => {
        navigate('/');
    };

    return (
        <div className="add-users-container">
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Enter name"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="number"
                        id="phone"
                        value={phone}
                        onChange={handleEmailChange}
                        placeholder="Enter Phone"
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role:</label>
                    <select
                        id="role"
                        value={role}
                        onChange={handleRoleChange}
                        required
                    >
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                        <option value="Guest">Guest</option>
                    </select>
                </div>
                <div className="button-group">
                    <button type="submit">Save</button>
                    <button type="button" onClick={handleCancel}>Cancel</button>
                </div>
            </form>
        </div>
    );
};

export default AddUsers;
