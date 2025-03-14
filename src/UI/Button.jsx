const Button = ({ showButton, resetBoard, innerText }) => {
  return (
    <button
      className={`mt-4 px-4 py-2 bg-fuchsia-500 hover:bg-fucshia-600 text-white font-semibold cursor-pointer rounded-md transition-opacity animate-bounce duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={resetBoard}
    >
      {innerText}
    </button>
  );
};

export default Button;
