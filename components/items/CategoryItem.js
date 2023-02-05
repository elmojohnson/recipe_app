import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryItem = ({ category, description, thumbnail }) => {
  return (
    <Link href={`/category/${category}`}>
      <div className="card">
        <Image
          src={thumbnail}
          alt={category}
          width={150}
          height={150}
          priority
          className={`h-auto w-full bg-white ${
            category === "Breakfast" || category === "Goat" ? null : "p-2"
          }`}
        />
        <div className="p-4">
          <h3 className="font-bold text-xl">{category}</h3>
          <p className="line-clamp-3">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
