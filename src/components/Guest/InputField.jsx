const InputField = ({ type, name, placeholder }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete={name}
      className="mt-1 block w-full rounded-full py-4 px-6 border-0 transition duration-500 bg-purple-100 placeholder:text-purple-900 shadow-lg shadow-purple-700 focus:shadow-purple-500 focus:ring-0"
    />
  );
};

export default InputField;
