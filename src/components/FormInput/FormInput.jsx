const FormInput = ({ name, placeholder }) => {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="bg-gray-100 h-14 px-4 outline-none"
      name={name}
      required
    />
  );
};

export default FormInput;
