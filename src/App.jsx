import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CartContextProvider from "./context/CartContext";
import FavoriteContextProvider from "./context/FavoritesContext";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Favorite from "./pages/Favorite";
import Category from "./pages/Category";
import CategoryProducts from "./pages/CategoryProducts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "products/:productId",
      element: <Product />,
    },
    {
      path: "categories",
      element: <Category />,
    },
    {
      path: "categories/:categoryId",
      element: <CategoryProducts />,
    },
    {
      path: "cart",
      element: <Cart />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "favorites",
      element: <Favorite />,
    },
  ]);

  return (
    <CartContextProvider>
      <FavoriteContextProvider>
        <RouterProvider router={router} />
      </FavoriteContextProvider>
    </CartContextProvider>
  );
}

export default App;
