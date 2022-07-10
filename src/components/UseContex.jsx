import { createContext, useContext } from 'react';

const data = {
  message: 'createContex and useContext',
};

// Evita enviar la data como props a los componentes.
const DataContex = createContext(data);

export default function CreateContex() {
  function Father() {
    return (
      <div>
        <Child />
      </div>
    );
  }

  function Child() {
    const data = useContext(DataContex);

    return (
      <div>
        <h3>{data.message}</h3>
      </div>
    );
  }

  return (
    <DataContex.Provider value={data}>
      <Father />
    </DataContex.Provider>
  );
}
