import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBusAlt } from 'react-icons/fa';

const Home = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (from && to) {
      navigate('/search', { state: { from, to } });
    } else {
      alert('Please enter both "From" and "To" locations.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-center mt-5 text-green-100 font-semibold">
        Online Bus Ticket Booking and Routing
      </h1>
      <h1 className="text-center text-zinc-700 font-medium">
        Assured seat of your choice
      </h1>
      <div>
        {/* Input Fields */}
        <div className="w-full flex justify-start p-5 items-center h-[10vh] mt-8 rounded-3xl bg-zinc-800">
          <FaBusAlt className="mr-3 text-zinc-500" />
          <input
            type="text"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Enter departure location"
            className="w-full bg-transparent outline-none text-white placeholder-zinc-500"
          />
        </div>
        <div className="w-full flex justify-start p-5 items-center h-[10vh] mt-2 rounded-3xl bg-zinc-800">
          <FaBusAlt className="mr-3 text-zinc-500" />
          <input
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter destination"
            className="w-full bg-transparent outline-none text-white placeholder-zinc-500"
          />
        </div>
        {/* Search Button */}
        <div className="mt-5">
          <button
            onClick={handleSearch}
            className="w-full py-4 bg-green-600 text-white rounded-3xl text-lg font-medium hover:bg-green-700 transition"
          >
            Search Buses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
