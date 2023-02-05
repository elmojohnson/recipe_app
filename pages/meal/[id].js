import React from "react";
import Layout from "@/components/layouts/Layout";
import useMealById from "@/hooks/useMealById";

const Meal = () => {
  const { meal, isLoading } = useMealById();
  return (
    <Layout>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{meal.meal}</h1>
        </div>
      )}
    </Layout>
  );
};

export default Meal;
