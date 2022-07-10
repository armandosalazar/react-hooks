import { useMemo } from 'react';

// Es utilizado para optimizar el rendereo de un componente.
// Cuando necesitamos realizar una operación que demanda demasiados recursos, lo que hace esta es aparenderse el resultado de alguna operación.

function cumputeExpensiveValue(a, b) {
  return a + b;
}

function UseMemo() {
  let a = 2;
  let b = 3;
  // Solo se llamara si alguna de las dos dependencias cambia.
  const memorizedValue = useMemo(() => cumputeExpensiveValue(a, b), [a, b]);
  return <h3>{memorizedValue}</h3>;
}

export default UseMemo;
