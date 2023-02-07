import { useEffect, useState } from "react";

const useProduct = (productId) => {
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.escuelajs.co/api/v1/products/${productId}`;
      try {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setIsError(true);
        console.log("Error: Unable to fetch data");
      }
    };

    fetchData();
  }, []);
  if (!productId) {
    return {};
  }
  return { product, isError, isLoading };
};

export default useProduct;
