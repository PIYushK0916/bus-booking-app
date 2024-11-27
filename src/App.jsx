import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import SearchResults from './components/SearchResults';
import Booking from './components/Booking';
import Footer from './components/Footer';
import RouteDetails from './components/RouteDetails';

const App = () => {
  return (
    // Add basename for correct routing on GitHub Pages
    <Router basename="/bus-booking-app">
      <div className="bg-black flex flex-col justify-between h-screen text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/booking/:id" element={<Booking />} />
          <Route path="/route-details" element={<RouteDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
