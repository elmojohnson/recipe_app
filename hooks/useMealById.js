import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useMealById = () => {
  const router = useRouter();
  const [meal, setMeal] = useState({
    id: "",
    meal: "",
    category: "",
    area: "",
    thumbnail: "",
    instructions: "",
  });
  const [isLoading, setLoading] = useState(false);

  const getMeal = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" +
          router.query.id
      );
      const data = result.data.meals[0];

      setMeal({
        id: data.idMeal,
        meal: data.strMeal,
        category: data.strCategory,
        area: data.strArea,
        thumbnail: data.strMealThumb,
        instructions: data.strInstructions,
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    router.isReady && getMeal();
  }, [router]);

  return { meal, isLoading };
};

export default useMealById;
