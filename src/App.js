function App() {
  return (
    <>
      <h1>Counter App</h1>
      <CounterApp />
    </>
  );
}

//user
//userefineTag
function CounterApp() {
  //data member
  let counter = 1;


  //Member function 
  let likeMeAction = () => {
    counter = counter + 1;
  console.log("I am button click", counter);
  };

  //JSX :: VIEW :: USER-INTERFACE :: Required

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me!" onClick={likeMeAction} />
    </>
  );
}

export default App;
