import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const mockRoutes = {
  Pune: {
    Mumbai: [
      { busName: 'Pune Express', departure: '09:00 AM', fare: 500, id: 1 },
      { busName: 'Mumbai Superfast', departure: '01:00 PM', fare: 550, id: 2 },
    ],
    Nashik: [
      { busName: 'Nashik Travels', departure: '08:00 AM', fare: 450, id: 3 },
      { busName: 'Pune-Nashik Fast', departure: '03:00 PM', fare: 480, id: 4 },
    ],
  },
};

const SearchResults = () => {
  const location = useLocation();
  const { from, to } = location.state || {};
  const navigate = useNavigate();

  // Sanitize and match input values
  const sanitizedFrom = from?.trim().toLowerCase();
  const sanitizedTo = to?.trim().toLowerCase();

  console.log(`Searching for route: ${sanitizedFrom} to ${sanitizedTo}`);

  // Ensure keys match exactly by converting to proper case or lowercase
  const buses = mockRoutes[from] && mockRoutes[from][to];

  const handleBooking = (id) => {
    navigate(`/booking/${id}`);
  };

  const handleRouteClick = () => {
    // Pass state to the RouteDetails component
    navigate('/route-details', { state: { from, to } });
  };

  return (
    <div className="p-4">
      <h1 className="text-center text-green-100 font-semibold mb-5">
        Available Buses
      </h1>
      {buses ? (
        <>
          <p className="text-center text-zinc-500 mb-5">
            Route from <span className="text-white">{from}</span> to{' '}
            <span className="text-white">{to}</span>
          </p>
          <div className="flex p-2 justify-center items-center">
            <button
              onClick={handleRouteClick}
              className="bg-zinc-800 px-10 py-2 rounded-full"
            >
              Show Route
            </button>
          </div>
          <div className="space-y-4 mt-5">
            {buses.map((bus) => (
              <div
                key={bus.id}
                className="bg-zinc-800 p-4 rounded-lg flex justify-between items-center"
              >
                <div>
                  <h3 className="text-white text-lg font-medium">
                    {bus.busName}
                  </h3>
                  <p className="text-zinc-500">Departure: {bus.departure}</p>
                  <p className="text-zinc-500">Fare: ₹{bus.fare}</p>
                </div>
                <button
                  onClick={() => handleBooking(bus.id)}
                  className="py-2 px-4 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                  Book Now
                </button>
              </div>
            ))}
          </div>
        </>
      ) : (
        <p className="text-center text-red-500">
          No buses available between {from} and {to}.
        </p>
      )}
      <button
        onClick={() => navigate(-1)}
        className="w-full py-4 mt-5 bg-zinc-700 text-white rounded-3xl text-lg font-medium hover:bg-zinc-600 transition"
      >
        Back
      </button>
    </div>
  );
};

export default SearchResults;
