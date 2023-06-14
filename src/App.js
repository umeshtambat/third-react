import { useState } from "react";
function App() {
  return (
    <>
      <h1>Couter App</h1>
      <CounterApp />
      <CounterApp />
    </>
  );
}

function CounterApp() {
  // let counter = 1;   //stateless

  //  let var1 = useState(1);
  // console.log(var1);

  // let list = useState(1);
  // let[counter, setCounter]= list;

  let [counter, setCounter] = useState(1);

  let likeMeAction = () => {
    counter += 1;
    console.log(counter);

    //asking react to perform DOM operation
    setCounter(counter);
  };
  return (
    <>
      <h5>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores quam
        reiciendis nisi, sunt dolore delectus nesciunt minus expedita pariatur
        magni.
      </h5>
      <h5>
        {counter} <input type="button" value="like Me" onClick={likeMeAction} />
      </h5>
    </>
  );
}

export default App;
