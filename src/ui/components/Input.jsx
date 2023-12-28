function Input({ type, name, placeholder }) {
  return (
    <input
      className="bg-transparent w-full block py-2 px-3 border-b border-b-second-color placeholder:text-main-2-color font-medium focus:outline-none tracking-wide"
      type={type}
      name={name}
      placeholder={placeholder}
    />
  );
}

export default Input;
