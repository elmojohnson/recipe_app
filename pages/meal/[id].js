import React from "react";
import Layout from "@/components/layouts/Layout";
import useMealById from "@/hooks/useMealById";
import Image from "next/image";

const Meal = () => {
  const { meal, ingridients, isLoading } = useMealById();
  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="bg-white rounded-xl p-6 shadow flex lg:flex-row flex-col lg:items-start items-center lg:space-y-0 space-y-3 overflow-hidden relative">
          <div className="bg-primary h-44 w-full absolute top-0 right-0 lg:hidden block" />
          {meal.thumbnail && (
            <Image
              src={meal.thumbnail}
              alt={meal.meal}
              width={250}
              height={250}
              priority
              className="rounded-lg z-20 lg:shadow-none shadow"
            />
          )}
          <div className="w-full flex flex-col lg:items-start items-center space-y-8 lg:ml-6 ml-0">
            <div className="lg:text-start text-center w-full">
              <h1 className="font-bold text-3xl">{meal.meal}</h1>
              <label className="text-muted">
                {meal.category}, {meal.area}
              </label>
            </div>
            <div className="w-full">
              <h5 className="font-bold text-xl">Instructions</h5>
              <p className="whitespace-pre-line">{meal.instructions}</p>
            </div>
            <div className="w-full">
              <h5 className="font-bold text-xl">Ingridients</h5>
              <ul className="list-disc list-inside">
                {ingridients.map((ingridient, i) => {
                  return (
                    <li key={i} className="capitalize">
                      {ingridient.ingridient}{" "}
                      <span className="text-muted">({ingridient.measure})</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Meal;
