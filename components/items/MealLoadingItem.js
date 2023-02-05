import React from "react";

const MealLoadingItem = () => {
  return (
    <div className="card">
      <div className="bg-gray-300 h-64 w-full animate-pulse" />
      <div className="p-4 w-full flex flex-col space-y-2">
        <div className="bg-gray-300 h-6 w-2/3 rounded animate-pulse" />
      </div>
    </div>
  );
};

export default MealLoadingItem;
