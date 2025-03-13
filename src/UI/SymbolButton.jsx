const SymbolButton = ({idx, hasWin, symbol, border, handleClick}) => {
  return (
    <button
      className={`w-full h-full text-8xl font-bold flex items-center justify-center border-amber-400 ${
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
