import React, { useEffect } from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/animate.min.css";
import "./App.css";
import { useState } from "react";

import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,
} from "./pages/index";
import SignUp from './pages/SignUp'
import Footer from "./components/common/Footer";
import Registerhome from "./pages/Registerhome";
import Bookings from "./pages/Bookings";
import Confirmation from "./pages/Confirmation";
//import { useNavList} from 'components/data/Data.jsx';
export default function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <>
      <div>
        <Router>
          <Header 
            showSignUp={showSignUp}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room 
            />} />
            <Route path="/services" element={<Services />} />
            <Route path="/signup" element={<SignUp
               setShowSignUp={setShowSignUp}
            />}/>
            <Route path='/registerhome' element={<Registerhome/>}/>
            <Route path='Bookings/:id' element={<Bookings
            />}/>
            <Route path='/Confirm' element={< Confirmation />}/>
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}
