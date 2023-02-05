import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ value, onChange, handleSubmit }) => {
  return (
    <div className="flex items-center space-x-3 justify-between bg-accent rounded-full py-1 px-3">
      <input
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-orange-200"
      />
      <button className="outline-none">
        <MdSearch />
      </button>
    </div>
  );
};

export default Search;
