import React from "react";
import useMealById from "@/hooks/useMealById";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

const Meal = () => {
  const { meal, ingridients, isLoading } = useMealById();
  return (
    <div>
      {meal.thumbnail && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="h-64 w-full absolute bg-center bg-no-repeat bg-cover top-0 right-0 brightness-50 lg:block hidden"
          style={{ backgroundImage: `url(${meal.thumbnail})` }}
        />
      )}
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1 }}
            className="h-24 w-full flex items-center justify-center"
          >
            <CgSpinner className="animate-spin text-primary text-3xl" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1 }}
            className="bg-white rounded-xl p-6 shadow flex lg:flex-row flex-col lg:items-start items-center lg:space-y-0 space-y-3 overflow-hidden relative"
          >
            <div
              className="h-44 w-full absolute bg-center bg-no-repeat bg-cover top-0 right-0 lg:hidden block brightness-50"
              style={{ backgroundImage: `url(${meal.thumbnail})` }}
            />
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
                <h1 className="font-bold text-4xl">{meal.meal}</h1>
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
                <ul className="list-decimal list-inside">
                  {ingridients.map((ingridient, i) => {
                    return (
                      <li key={i} className="capitalize">
                        {ingridient.ingridient}{" "}
                        <span className="text-muted">
                          ({ingridient.measure})
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Meal;
