// models/Customer.js
const mongoose = require('mongoose');

// Define the customer schema
const customerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    memberNumber: { type: Number, required: true, unique: true },
    interests: { type: String, required: true },
});

// Create and export the model
module.exports = mongoose.model('Customer', customerSchema);
