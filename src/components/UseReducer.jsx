import { useReducer } from 'react';

// Es parecido a useState, permite tener un código más escalable y fácil de entender.
// Es como utilizar redux en una aplicación react.
const initialState = { count: 0 };

function reducer(state, action) {
  switch (action) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch('increment')}>+</button>
      <button onClick={() => dispatch('decrement')}>-</button>
    </>
  );
}

export default UseReducer;
