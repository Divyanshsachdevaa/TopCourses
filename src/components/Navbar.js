// Navbar.js
import React, { useState } from "react";
import { FaCartArrowDown } from "react-icons/fa";


const Navbar = () => {

  return (
    <div>
      <nav className="bg-bgDark py-4 flex justify-center items-center">
        <div className="flex-grow text-center mx-auto">
          <h1 className="text-3xl font-bold text-white">Top Courses</h1>
        </div>
        <div className="pr-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <FaCartArrowDown className="inline-block mr-2" />
            Checkout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
