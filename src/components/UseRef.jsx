import { useRef } from 'react';

function UseRef() {
  // Es una referencia a un elemento del DOM
  const inputRef = useRef();

  function handleClick() {
    alert(inputRef.current.value);
  }

  return (
    <>
      <div>
        <h3>Hi!</h3>
        <input type="text" ref={inputRef} />
        <button onClick={handleClick}>useRef</button>
      </div>
    </>
  );
}

export default UseRef;
