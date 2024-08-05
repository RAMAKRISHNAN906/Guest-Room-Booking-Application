import React, { useState, useEffect } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import './Auth.css';
import { useNavigate, useParams } from 'react-router-dom';
const Bookings = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(1);
  const [price, setPrice] = useState(0);
  const [rent, setRent] = useState(0);
  const { id } = useParams();
  const Nav=useNavigate()

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3001/loaddata/${id}`)
        .then(result => {
          console.log("ok");
          setRent(result.data.price);
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  }, [id]);

  useEffect(() => {
    setPrice(days * rent);
  }, [days, rent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3002/booking', { name, email, days, price })
      .then(result => {
        console.log("Booking confirmed", result.data);

// ************************************************
        const templateParams = {
          name: name,
          email: email,
          days: days,
          price: price
        };

        emailjs.send(
          'service_mzm96fm', 
          'template_4j00qli', 
          templateParams, 
          'EpeB5yDPAKKpw8v7o'
        )

          .then((response) => {
            console.log('Email successfully sent!', response.status, response.text);
          })
          .catch((err) => {
            console.error('Failed to send email. Error: ', err);
          });

// **************************************************
        Nav('/Confirm')
      })
      .catch(err => {
        console.error("Error in booking", err.response ? err.response.data : err.message);
      });
  };

  return (
    <div className="booking-form-container">
      <h2>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Enter valid email to receive confirmation</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="days">No. of Days</label>
          <input
            type="number"
            id="days"
            name="days"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            min="1"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="totalPrice">Total Price</label>
          <input
            type="number"
            id="totalPrice"
            name="totalPrice"
            value={price}
            readOnly
          />
        </div>
        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Bookings;

