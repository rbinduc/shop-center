import { useEffect, useState } from "react";

const useCategories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://api.escuelajs.co/api/v1/categories";
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setCategories(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        console.log("Error: Unable to fetch data");
      }
    };

    fetchData();
  }, []);
  return { categories, isError, isLoading };
};

export default useCategories;
