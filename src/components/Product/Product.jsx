import { Link } from "react-router-dom";
import { useFavoriteContext } from "../../context/FavoritesContext";
import Image from "../Image";

const Product = (product) => {
  const { isFavoriteProduct, handleToggleFavorites } = useFavoriteContext();
  return (
    <article className="w-1/2 md:w-4/12 lg:w-3/12 p-2">
      <Link
        to={`/products/${product.id}`}
        className="h-52 sm:h-64 md:h-80 lg:h-96 block group"
      >
        <Image
          src={product.images[0]}
          alt={product.title}
          className="h-full opacity-100 visible group-hover:invisible group-hover:opacity-0 group-hover:h-0"
        />

        <Image
          className="h-0 opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:h-full"
          src={product.images[1]}
          alt={product.title}
        />
      </Link>
      <div className="flex justify-between items-center p-4">
        <div>
          <div className="w-20 h-1 bg-amber-400 mb-2"></div>
          <p className="text-amber-400 text-lg sm:text-xl md:text-2xl font-bold">
            €{product.price}
          </p>
          <Link
            to={`/products/${product.id}`}
            className="text-black font-bold text-md md:text-lg hover:!text-amber-400"
          >
            <h6>{product.title}</h6>
          </Link>
        </div>
        <div className="p-2">
          <button
            className={
              isFavoriteProduct(product)
                ? "text-amber-500"
                : "text-neutral-600 hover:text-amber-500"
            }
            onClick={() => handleToggleFavorites(product)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill={isFavoriteProduct(product) ? "#f59e0b" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Product;
