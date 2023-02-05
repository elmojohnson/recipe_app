import React from "react";

const CategoryLoadingItem = () => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col items-center">
      <div className="bg-gray-300 h-48 w-full animate-pulse" />
      <div className="p-4 w-full flex flex-col space-y-2">
        <div className="bg-gray-300 h-6 w-1/2 rounded animate-pulse" />
        <div className="bg-gray-300 h-4 w-full rounded animate-pulse" />
        <div className="bg-gray-300 h-4 w-3/4 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default CategoryLoadingItem;
