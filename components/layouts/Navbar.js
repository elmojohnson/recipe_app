import React from "react";

import { MdFastfood } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="bg-primary py-3 text-white shadow">
      <div className="wrapper">
        <div className="flex items-center space-x-2">
          <MdFastfood className="text-3xl" />
          <h1 className="text-2xl font-bold">Good Foods</h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
