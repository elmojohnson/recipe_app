import Image from "next/image";
import Link from "next/link";
import React from "react";
import Card from "../utils/Card";

const MealItem = ({ id, meal, thumbnail }) => {
  return (
    <Link href={`/meal/${id}`}>
      <Card>
        <Image
          src={thumbnail}
          alt={meal}
          width={150}
          height={150}
          priority
          className="h-auto w-full bg-white"
        />
        <div className="p-4">
          <p className="font-bold text-lg">{meal}</p>
        </div>
      </Card>
    </Link>
  );
};

export default MealItem;
