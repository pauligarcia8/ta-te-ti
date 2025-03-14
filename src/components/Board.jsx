import { useState, useEffect } from "react";
import { initialBoard, winPatterns } from "../utils/board";
import Button from "../UI/Button";
import SymbolButton from "../UI/SymbolButton";
import Subtitle from "../UI/Subtitle";

const Board = () => {
  const [board, setBoard] = useState(initialBoard);
  const [symbol, setSymbol] = useState(null);
  const [hasWin, setHasWin] = useState(false);
  const [tie, setTie] = useState(false);
  const [showButton, setShowButton] = useState(false);

  const handleClick = (idx) => {
    if (board[idx].value !== null) return;

    const newSymbol = symbol === "X" ? "O" : "X";
    setSymbol(newSymbol);
    setBoard((prev) => {
      const newBoard = [...prev];
      newBoard[idx] = { ...newBoard[idx], value: newSymbol };
      return newBoard;
    });
  };

  const resetBoard = () => {
    setHasWin(false);
    setTie(false);
    setShowButton(false);
    setBoard(initialBoard);
  };

  const checkWin = () => {
    setHasWin(false);
    setTie(false);

    for (let pattern of winPatterns) {
      let position1 = board[pattern[0]].value;
      let position2 = board[pattern[1]].value;
      let position3 = board[pattern[2]].value;

      if (
        position1 !== null &&
        position2 !== null &&
        position3 !== null &&
        position1 === position2 &&
        position1 === position3
      ) {
        setHasWin(true);
        return;
      }
    }

    const isBoardFull = board.every((box) => box.value !== null);
    if (isBoardFull) {
      setTie(true);
    }
  };

  useEffect(() => {
    checkWin();
  }, [symbol]);

  useEffect(() => {
    if (hasWin || tie) {
      setTimeout(() => {
        setShowButton(true);
      }, 300);
    }
  }, [hasWin, tie]);

  return (
    <>
      <div className="h-10 flex flex-col items-center justify-center">
        {(hasWin || tie) && (
          <Subtitle>
            {hasWin && `WON PARTICIPANT "${symbol}"`}
            {tie && `IT'S A TIE!`}
          </Subtitle>
        )}
      </div>
      <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] grid grid-cols-3 my-6">
        {board.map((box, idx) => (
          <SymbolButton
            key={idx}
            hasWin={hasWin}
            symbol={box.value}
            border={box.border}
            handleClick={() => handleClick(idx)}
          />
        ))}
      </div>
      <Button
        showButton={showButton}
        resetBoard={resetBoard}
        innerText="START NEW GAME"
      />
    </>
  );
};

export default Board;
