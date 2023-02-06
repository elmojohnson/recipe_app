import { useRouter } from "next/router";
import { useState } from "react";

const useSearch = () => {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleChange = (e) => setQuery(e.target.value);

  const handleSubmit = () => {
    router.push(`/search?q=${query}`)
  };

  return { query, handleChange, handleSubmit };
};

export default useSearch;
