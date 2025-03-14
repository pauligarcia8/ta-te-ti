import Board from "./components/Board";
import Title from "./UI/Title";

function App() {

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-blue-950">
      <Title>TA TE TI</Title>
      <Board />
    </div>
  );
}

export default App;
