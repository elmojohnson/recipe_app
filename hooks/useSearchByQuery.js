import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useSearchByQuery = () => {
  const router = useRouter();
  const [meals, setMeals] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getSearchResult = async (query) => {
    try {
      setMeals([]);
      setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + query
      );

      if (result.data.meals !== null) {
        setMeals(result.data.meals);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    if (window !== undefined) {
      const url = new URL(window.location.href);
      const query = url.searchParams.get("q");

      if (!query) {
        router.push("/");
      }

      getSearchResult(query);
    }
  }, [router]);

  return { meals, isLoading };
};

export default useSearchByQuery;
