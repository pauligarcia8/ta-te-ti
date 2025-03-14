const SymbolButton = ({idx, hasWin, symbol, border, handleClick}) => {
  return (
    <button
      className={`w-full h-full text-7xl md:text-8xl text-white flex items-center justify-center border-cyan-400 ${
        border
      } ${!hasWin ? "cursor-pointer" : ""}`}
      onClick={handleClick}
      disabled={hasWin}
    >
      {symbol || <span>&nbsp;</span>}
    </button>
  );
};

export default SymbolButton;
