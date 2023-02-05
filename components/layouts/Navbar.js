import React from "react";

import { MdFastfood } from "react-icons/md";
import Search from "../forms/Search";

const Navbar = () => {
  return (
    <div className="bg-primary py-3 text-white shadow sticky top-0 z-50">
      <div className="wrapper flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MdFastfood className="text-3xl" />
          <h1 className="text-2xl font-bold md:block hidden">Good Foods</h1>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
