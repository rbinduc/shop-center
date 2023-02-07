const Image = ({ className = "", ...rest }) => {
  return (
    <img
      className={`transition ease-in-out duration-500 w-full h-full object-fit object-cover ${className}`}
      {...rest}
    />
  );
};

export default Image;
