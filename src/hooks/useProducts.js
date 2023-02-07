import { useEffect, useState } from "react";

const useProducts = (categoryId) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let url = "https://api.escuelajs.co/api/v1/products";
      if (categoryId) {
        url = `https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`;
      }
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        console.log("Error: Unable to fetch data");
      }
    };

    fetchData();
  }, []);
  return { products, isError, isLoading };
};

export default useProducts;
