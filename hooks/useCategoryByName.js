import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const useCategoryByName = () => {
  const router = useRouter();
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getCategory = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/filter.php?c=" +
          router.query.name
      );
      setMeals(result.data.meals);
    } catch (error) {
      console.error(error);
      router.push("/");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.isReady && getCategory();
  }, [router]);

  return { meals, isLoading };
};

export default useCategoryByName;
