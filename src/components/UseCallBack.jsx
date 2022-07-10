import { useCallback, useEffect, useState } from 'react';

function UseCallBack() {
  const [count, setCount] = useState(99);

  function Child({ handle }) {
    return <button onClick={handle}>Handle</button>;
  }

  useEffect(() => {
    setCount(count + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // React memoriza la función para no crearla cada vez que se renderiza el componente.
  // Esto es muy útil cuando la función es muy costosa.
  // Usando esta funci´on, podemos evitar que los hijos re-renderizen cada vez que el padre cambia.
  const showCount = useCallback(() => {
    alert(count);
    // Cada que cambie count se volvera a renderizar esa función.
  }, [count]);

  return (
    <div>
      <Child handle={showCount} />
    </div>
  );
}

export default UseCallBack;
