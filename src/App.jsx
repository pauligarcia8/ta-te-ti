function App() {

  const tableboard = [
    {
      value: null,
      border: 'border-b-2 border-r-2'
    },
    {
      value: null,
      border: 'border-b-2 border-r-2'
    },
    {
      value: null,
      border: 'border-b-2'
    },
    {
      value: null,
      border: 'border-b-2 border-r-2'
    },
    {
      value: null,
      border: 'border-b-2 border-r-2'
    },
    {
      value: null,
      border: 'border-b-2'
    },
    {
      value: null,
      border: 'border-r-2'
    },
    {
      value: null,
      border: 'border-r-2'
    },
    {
      value: null,
      border: 'border-none'
    },
  ]


  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-400">
      <h1 className="w-full text-lg text-blue-600 font-bold text-center m-4">
        TA TE TI
      </h1>
      <div className="w-[600px] h-[600px] grid grid-cols-3">
        {tableboard.map((box) => (

        <div className={`w-full h-full border-amber-400 ${box.border}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
