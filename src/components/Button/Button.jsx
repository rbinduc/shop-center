const Button = ({ label, className = "", ...rest }) => {
  return (
    <button
      type="button"
      className={`font-semibold h-14 px-4 py-4 w-full mt-12 block bg-amber-400 text-white text-xl shadow-md border-none hover:bg-black rounded-none transition ease-in-out duration-300 cursor-pointer !outline-none ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

export default Button;
