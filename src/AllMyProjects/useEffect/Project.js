import React, { useEffect, useState } from "react";

export default function Project() {
  console.log("Project render");
  const [count, setCount] = useState(0);

  function increment() {
    setCount((prev) => prev + 1);
  }

  useEffect(() => {
    console.log("useEffect");
  }, [count]);

  return (
    <>
      <h1>useEffects party!!!!</h1>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
    </>
  );
}
