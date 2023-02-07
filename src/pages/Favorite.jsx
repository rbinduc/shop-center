import ProductList from "../components/ProductList";
import { useFavoriteContext } from "../context/FavoritesContext";
import Layout from "../layout";

function Favorite() {
  const { favorites } = useFavoriteContext();
  return (
    <Layout>
      {favorites.length === 0 ? (
        <div className="text-center text-3xl mt-14">
          You have no favorite products :(
        </div>
      ) : (
        <ProductList title={"Favorites"} products={favorites} />
      )}
    </Layout>
  );
}

export default Favorite;
