import useSearch from "@/hooks/useSearch";
import React from "react";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const { query, handleChange, handleSubmit } = useSearch();
  
  return (
    <div className="flex items-center space-x-3 justify-between bg-accent rounded-full py-1 px-3">
      <input
        placeholder="Search"
        className="bg-transparent outline-none placeholder:text-orange-200"
        value={query}
        onChange={handleChange}
      />
      <button className="outline-none disabled:text-primary" disabled={!query} onClick={handleSubmit}>
        <MdSearch />
      </button>
    </div>
  );
};

export default Search;
