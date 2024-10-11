// src/App.js
import React, { useState } from 'react';
import ListCustomers from './components/ListCustomers';
import AddCustomer from './components/AddCustomer';
import UpdateCustomer from './components/UpdateCustomer';

const App = () => {
    const [customers, setCustomers] = useState([]);
    const [editingCustomer, setEditingCustomer] = useState(null);

    const handleAddCustomer = (newCustomer) => {
        setCustomers([...customers, newCustomer]);
    };

    const handleEditCustomer = (customer) => {
        setEditingCustomer(customer);
    };

    const handleUpdateCustomer = (updatedCustomer) => {
        setCustomers(customers.map((cust) => (cust._id === updatedCustomer._id ? updatedCustomer : cust)));
        setEditingCustomer(null);
    };

    const handleDeleteCustomer = async (id) => {
        await axios.delete(`http://localhost:3000/api/customers/${id}`);
        setCustomers(customers.filter((cust) => cust._id !== id));
    };

    return (
        <div>
            <h1>Customer Management</h1>
            {editingCustomer ? (
                <UpdateCustomer customer={editingCustomer} onUpdate={handleUpdateCustomer} onCancel={() => setEditingCustomer(null)} />
            ) : (
                <>
                    <AddCustomer onAdd={handleAddCustomer} />
                    <ListCustomers onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
                </>
            )}
        </div>
    );
};

export default App;
