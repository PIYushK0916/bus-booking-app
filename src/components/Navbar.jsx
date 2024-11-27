import React from 'react';
import { FaBus } from 'react-icons/fa';
import { TiThMenu } from 'react-icons/ti';

const Navbar = () => {
  return (
    <div className="pt-5 px-3 flex text-xl font-bold text-white rounded-2xl justify-between items-center">
      <div className="w-full bg-zinc-800 p-4 px-6 rounded-2xl flex justify-between items-center">
        <h1 className="w-full flex items-center">
          <FaBus />
          <span className="ml-2">Ride Bus</span>
        </h1>
        <TiThMenu />
      </div>
    </div>
  );
};

export default Navbar;
