import React from "react";
import styled from "styled-components";

var number = 1;

const MyReactComponent = React.forwardRef((props, ref) => (
  <>
    <h1>My React Component</h1>
    <p ref={ref}>The paragraph element for my react component</p>
  </>
));

// PROJECT COMPONENT

export default function Project() {
  const myRef = React.useRef();
  const myOtherRef = React.useRef();

  function handleClick() {
    //logRefAttributes(myRef);
    console.log("my other ref", myOtherRef.current);
  }

  // once the component has rendered do this
  // The DOM is constructed when the effect callback runs
  // React.useEffect(() => {
  //   myRef.current.focus();
  //   myRef.current.addEventListener("input", () =>
  //     console.log(myRef.current.value)
  //   );
  // }, []);

  return (
    <>
      <button onClick={handleClick}>Button</button>
      <MyReactComponent ref={myOtherRef}></MyReactComponent>
    </>
  );
}
