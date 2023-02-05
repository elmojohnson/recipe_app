import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ category, description, thumbnail }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden flex flex-col items-center">
      <Image
        src={thumbnail}
        alt={category}
        width={150}
        height={150}
        priority
        className={`h-auto w-full bg-white ${category === "Breakfast" || category === "Goat" ? null : "p-2"}`}
      />
      <div className="p-4">
        <Link href={"/category/" + category} className="font-bold text-xl hover:text-primary">{category}</Link>
        <p className="line-clamp-3">{description}</p>
      </div>
    </div>
  );
};

export default CategoryItem;
