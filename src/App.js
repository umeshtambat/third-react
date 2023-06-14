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
  //data menbers
  let counter = 1;
  // let buttonTitle = "Like Me";
  let id = 100;
  let str = "Hello World";
  let active = true;

  //Member function :: Optional
  let likeMeAction = () => {};
  let dislikeMeAction = () => {};

  //JSX :: VIEW :: USER-INTERFACE :: Required

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me!" />
    </>
  );
}

export default App;
