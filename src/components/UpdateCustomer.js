// src/components/UpdateCustomer.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateCustomer = ({ customer, onUpdate, onCancel }) => {
    const [name, setName] = useState(customer.name);
    const [dateOfBirth, setDateOfBirth] = useState(customer.dateOfBirth);
    const [memberNumber, setMemberNumber] = useState(customer.memberNumber);
    const [interests, setInterests] = useState(customer.interests);

    useEffect(() => {
        setName(customer.name);
        setDateOfBirth(customer.dateOfBirth);
        setMemberNumber(customer.memberNumber);
        setInterests(customer.interests);
    }, [customer]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedCustomer = { name, dateOfBirth, memberNumber, interests };
        await axios.put(`http://localhost:3000/api/customers/${customer._id}`, updatedCustomer);
        onUpdate({ ...customer, ...updatedCustomer });
    };

    return (
        <div>
            <h2>Update Customer</h2>
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
                <button type="submit">Update Customer</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default UpdateCustomer;
