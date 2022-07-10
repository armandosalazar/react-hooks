import { useEffect, useState } from 'react';
import './App.css';
import CreateContex from './components/UseContex';
import UseCallBack from './components/UseCallBack';
import UseMemo from './components/UseMemo';
import UseReducer from './components/UseReducer';
import UseRef from './components/UseRef';
import UseLayoutEffect from './components/UseLayoutEffect';

function App() {
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  // Podemos hacer algo cuando la aplicaci´on se acabe de montar
  //  o cuando se actualiza el estado o cuando se destruye.
  useEffect(() => {
    // console.log('Se montó la aplicación');
    // setCounter(counter + 1);
    // console.log('Se actualizo el estado');
    return () => {
      // console.log('Se destruyo la aplicación');
    };
  }, [counter]);
  // Cuando dejamos el array vacio, se ejecuta solo una vez al montar la aplicación.
  // Cuando no dejamos el array vacio, se ejecuta cada vez que se actualiza el estado.

  function updateCounterTwo() {
    // Así se obtiene el estado actual
    setCounterTwo((prevState) => prevState + 1);
  }

  return (
    <div className="App">
      <h1>Click number: {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <h2>Counter: {counterTwo}</h2>
      <button onClick={updateCounterTwo}>+</button>
      <CreateContex />
      <UseRef />
      <UseReducer />
      <UseMemo />
      <UseCallBack />
      <UseLayoutEffect />
    </div>
  );
}

export default App;
