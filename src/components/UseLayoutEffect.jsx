import { useLayoutEffect, useState } from 'react';
import style from './UseLayoutEffect.module.css';

function UseLayoutEffect() {
  const [count, setCount] = useState(100);
  const [data, setData] = useState(null);

  // La firma es idéntica a useEffect, pero se dispara de forma síncrona después de todas las mutaciones de DOM.
  // Corre después de que el componente se renderiza
  // pero antes de que se muestre en la pantalla
  // mostrar el componente en la pantalla hasta que se ejecute.
  useLayoutEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((res) => res.json())
      .then((data) => setData(data));
    setCount(count + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={style.post}>
      <h1>Post {count}</h1>
      <h3>{data?.title}</h3>
      <p>{data?.body}</p>
    </div>
  );
}

export default UseLayoutEffect;
