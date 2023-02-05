import axios from "axios";
import React, { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getCategories = async () => {
    try {
      setLoading(true);
      const result = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      console.log(result.data);
      setCategories(result.data.categories);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, isLoading };
};

export default useCategories;
