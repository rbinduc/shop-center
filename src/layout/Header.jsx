import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/CartContext";
import { useFavoriteContext } from "../context/FavoritesContext";

const activeStyle = {
  color: "#f59e0b",
};

const icons = {
  cart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  ),
  favorite: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  ),
};

const MenuLink = ({ icon, to, count }) => (
  <NavLink
    className="text-neutral-600 hover:text-amber-500 relative"
    to={to}
    style={({ isActive }) => (isActive ? activeStyle : undefined)}
  >
    {icon}
    {count !== undefined && (
      <span className="flex absolute bottom-3 left-4">
        <span className="w-5 h-5 bg-amber-400 rounded-full text-white text-xs flex justify-center items-center">
          {count}
        </span>
      </span>
    )}
  </NavLink>
);

const Header = () => {
  const { cartCount } = useCartContext();
  const { favoritesCount } = useFavoriteContext();

  return (
    <header className="flex flex-wrap border">
      <nav className="flex justify-between bg-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
          <NavLink
            className="text-amber-500 text-3xl font-bold font-heading"
            to="/"
          >
            {/* <!-- <img className="h-9" src="logo.png" alt="logo"> --> */}
            Shop Center.
          </NavLink>
          <ul className="hidden md:flex px-4 mx-auto font-medium font-heading space-x-12">
            <li>
              <NavLink
                className="text-neutral-600 hover:text-amber-500"
                to="/"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-neutral-600 hover:text-amber-500"
                to="/categories"
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                Categories
              </NavLink>
            </li>
            <li>
              <a className="text-neutral-600 hover:text-amber-500" href="#">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-5 items-center">
            <MenuLink
              icon={icons.favorite}
              to={"/favorites"}
              count={favoritesCount}
            />
            <MenuLink icon={icons.cart} to={"/cart"} count={cartCount} />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
