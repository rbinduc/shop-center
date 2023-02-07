import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(undefined);

const CartContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const handleAddToCart = (product, qty) => {
    setProducts((prevProducts) => {
      const found = products.find((prod) => prod.id === product.id);
      if (found) {
        return products.map((prod) => ({
          ...prod,
          ...(found.id === prod.id
            ? { qty: parseInt(prod.qty) + parseInt(qty) }
            : undefined),
        }));
      }

      return [...prevProducts, { ...product, qty }];
    });
    alert("Product added to cart :)");
  };

  const subtotal = products.reduce(
    (acc, current) => acc + current.price * current.qty,
    0
  );

  const handleDeleteFromCart = (product) => {
    setProducts(products.filter((prod) => prod.id !== product.id));
  };

  const handlePlaceOrder = () => {
    setProducts([]);
  };

  const value = {
    products,
    subtotal,
    total: subtotal,
    handleAddToCart,
    handleDeleteFromCart,
    handlePlaceOrder,
    cartCount: products.reduce(
      (prev, current) => prev + parseInt(current.qty),
      0
    ),
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvider;
