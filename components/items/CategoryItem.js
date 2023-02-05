import Image from "next/image";
import React from "react";

const CategoryItem = ({ category, description, thumbnail }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col items-center space-y-3 pb-3">
      <Image
        src={thumbnail}
        alt={category}
        width={150}
        height={150}
        priority
        className="h-auto w-full bg-white"
      />
      <h3 className="font-semibold text-xl">{category}</h3>
    </div>
  );
};

export default CategoryItem;
