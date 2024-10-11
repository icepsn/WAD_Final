// src/components/AddCustomer.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCustomer = ({ onAdd }) => {
    const [name, setName] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [memberNumber, setMemberNumber] = useState('');
    const [interests, setInterests] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newCustomer = { name, dateOfBirth, memberNumber, interests };
        const response = await axios.post('http://localhost:3000/api/customers', newCustomer);
        onAdd(response.data.customer);
        setName('');
        setDateOfBirth('');
        setMemberNumber('');
        setInterests('');
    };

    return (
        <div>
            <h2>Add New Customer</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="date"
                    placeholder="Date of Birth"
                    value={dateOfBirth}
                    onChange={(e) => setDateOfBirth(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Member Number"
                    value={memberNumber}
                    onChange={(e) => setMemberNumber(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    required
                />
                <button type="submit">Add Customer</button>
            </form>
        </div>
    );
};

export default AddCustomer;
