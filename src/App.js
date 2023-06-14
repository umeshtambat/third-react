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

   let counter =100;
  //Member function :: Optional
  let likeMeAction = () => {
    //alert();

    console.log("I am button click");
  };


  //JSX :: VIEW :: USER-INTERFACE :: Required

  return (
    <>
      <h1>{counter}</h1>
      <input type="button" value="Like Me!"  onClick={likeMeAction} />
    </>
  );
}

export default App;
