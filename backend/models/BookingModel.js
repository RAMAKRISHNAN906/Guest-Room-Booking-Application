const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required:true
    },
    days: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const Booking = mongoose.model("bookingdetails", BookingSchema);

module.exports = Booking;
