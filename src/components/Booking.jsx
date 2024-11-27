import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h1 className="text-center text-green-100 font-semibold mb-5">
        Book Your Seat (Bus ID: {id})
      </h1>
      <form className="bg-zinc-800 p-4 rounded-xl">
        <div className="mb-4">
          <label className="block text-zinc-500">Name:</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-zinc-700 text-white"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-zinc-500">Seats:</label>
          <input
            type="number"
            className="w-full p-2 rounded bg-zinc-700 text-white"
            placeholder="Number of seats"
          />
        </div>
        <button className="w-full py-2 bg-green-600 rounded text-white hover:bg-green-700">
          Confirm Booking
        </button>
      </form>
      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 mt-5 bg-zinc-700 text-white rounded-3xl text-lg font-medium hover:bg-zinc-600 transition"
      >
        Back
      </button>
    </div>
  );
};

export default Booking;
