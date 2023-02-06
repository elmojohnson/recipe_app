import React from "react";
import Link from "next/link";

import { MdFastfood } from "react-icons/md";
import Search from "../forms/Search";

const Navbar = () => {
  return (
    <div className="bg-primary py-3 text-white shadow sticky top-0 z-50">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 hover:brightness-90">
          <MdFastfood className="text-3xl" />
          <h1 className="text-2xl font-bold md:block hidden">Good Foods</h1>
        </Link>
        <Search />
      </div>
    </div>
  );
};

export default Navbar;
