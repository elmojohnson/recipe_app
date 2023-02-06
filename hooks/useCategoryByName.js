import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useCategoryByName = () => {
  const router = useRouter();

  const mealName = router.query.name;
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getCategory = async () => {
    try {
      setLoading(true);
      const result = await axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=" + mealName);
      setMeals(result.data.meals);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.isReady && getCategory();
  }, [router]);

  return { mealName, meals, isLoading };
};

export default useCategoryByName;
