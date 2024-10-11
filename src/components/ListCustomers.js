// src/components/ListCustomers.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListCustomers = ({ onEdit, onDelete }) => {
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchCustomers = async () => {
            const response = await axios.get('http://localhost:3000/api/customers');
            setCustomers(response.data);
        };
        fetchCustomers();
    }, []);

    return (
        <div>
            <h2>Customer List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Member Number</th>
                        <th>Interests</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer._id}>
                            <td>{customer.name}</td>
                            <td>{new Date(customer.dateOfBirth).toLocaleDateString()}</td>
                            <td>{customer.memberNumber}</td>
                            <td>{customer.interests}</td>
                            <td>
                                <button onClick={() => onEdit(customer)}>Edit</button>
                                <button onClick={() => onDelete(customer._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ListCustomers;
