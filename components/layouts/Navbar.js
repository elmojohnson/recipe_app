import React from "react";

import { MdFastfood } from "react-icons/md";
import Search from "../forms/Search";

const Navbar = () => {
  return (
    <div className="bg-primary py-3 text-white shadow">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MdFastfood className="text-3xl" />
          <h1 className="text-2xl font-bold">Good Foods</h1>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
