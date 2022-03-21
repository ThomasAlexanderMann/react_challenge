import React from "react";

export default function Project() {
  console.log("project component rendered");

  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(0);
  const [count3, setCount3] = React.useState(0);

  function incrementCount() {
    setCount((prevCount) => prevCount + 1);
  }
  console.log("count:" + count);

  function incrementCount2() {
    setCount2((prevCount) => prevCount + 1);
  }

  function incrementCount3() {
    setCount3((prevCount) => prevCount + 1);
  }

  React.useEffect(() => {
    console.log("useEffect for count 2");
  }, [count2]);

  React.useEffect(() => {
    console.log("useEffect for count 3");
  }, [count3]);

  return (
    <>
      <h1>What is react lifecycle?</h1>
      <p>Counter: {count}</p>
      <button onClick={incrementCount}>Add</button>
      <button onClick={incrementCount2}>Add 2</button>
      <button onClick={incrementCount3}>Add 3</button>
    </>
  );
}
