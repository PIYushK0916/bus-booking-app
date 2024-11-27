import React from 'react';
import { useLocation } from 'react-router-dom';

const stationData = {
  Pune: {
    Mumbai: [
      'Pune Station',
      'Lonavala',
      'Khandala',
      'Kalyan',
      'Mumbai Dadar',
    ],
    Nashik: [
      'Pune Station',
      'Sinnar',
      'Nashik Road',
      'Nashik City',
    ],
  },
};

const RouteTimeline = () => {
  const location = useLocation();
  const { from, to } = location.state || {};

  const stations = stationData[from] && stationData[from][to];

  return (
    <div className="p-4">
      <h1 className="text-center text-green-100 font-semibold mb-5">
        Route Timeline: {from} to {to}
      </h1>

      {stations ? (
        <div className="space-y-4">
          <h2 className="text-center text-white mb-3">Stations:</h2>
          <ul className="text-white">
            {stations.map((station, index) => (
              <li key={index} className="mb-2">
                <span>{index + 1}. </span>
                {station}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center text-red-500">No stations available for this route.</p>
      )}

      <button
        onClick={() => window.history.back()}
        className="w-full py-4 mt-5 bg-zinc-700 text-white rounded-3xl text-lg font-medium hover:bg-zinc-600 transition"
      >
        Back
      </button>
    </div>
  );
};

export default RouteTimeline;
