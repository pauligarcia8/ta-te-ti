import Board from "./components/Board";
import Title from "./UI/Title";

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-400">
      <Title>TA TE TI</Title>
      <Board />
    </div>
  );
}

export default App;
