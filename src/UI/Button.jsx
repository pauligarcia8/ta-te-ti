const Button = ({ showButton, resetBoard, innerText }) => {
  return (
    <button
      className={`mt-4 px-4 py-2 bg-amber-500 hover:bg-amber-500 text-white font-semibold cursor-pointer rounded-md transition-opacity animate-bounce duration-300 ${
        showButton ? "opacity-100" : "opacity-0"
      }`}
      onClick={resetBoard}
    >
      {innerText}
    </button>
  );
};

export default Button;
