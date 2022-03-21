// React
import React from "react";

// CSS
import "./project.css";
import styled from "styled-components";

// import: Data
import { boxesData } from "./boxesData";

const add = (function () {
  let counter = 0;
  return function () {
    counter += 1;
    console.log(counter);
    return counter;
  };
})();

add();
add();
add();

// project component
export default function Project() {
  // State - boxesData
  const [boxes, setBoxes] = React.useState(boxesData);

  // State updating function
  function toggleBoxOn(id) {
    setBoxes((prevState) => {
      return prevState.map((box) => {
        return box.id === id ? { ...box, on: !box.on } : { ...box };
      });
    });
  }

  return (
    <>
      <h1>Another Challenge</h1>
      {/* maps boxes data into Box Components */}
      {boxes.map((box) => {
        return (
          // Box component
          <Box key={box.id} on={box.on} handleClick={() => toggleBoxOn(box.id)}>
            {box.id}
          </Box>
        );
      })}
    </>
  );
}

// Box component
const UnstyledBox = (props) => {
  const styles = { backgroundColor: props.on ? "yellow" : "grey" };

  return (
    <div
      className={props.className}
      style={styles}
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.children}
    </div>
  );
};

// box styling
const Box = styled(UnstyledBox)`
  height: 200px;
  width: 200px;
  margin: 20px;
  display: inline-block;
`;

// #region
// export default function Project() {
//   const [things, setThings] = React.useState(["thing1", "thing2"]);

//   function addThing(){
//     setThings((prevState) => {
//       return [...prevState, `thing ${prevState.length + 1}`] });
//   };

//   const thingselements = things.map((thing, index) => (
//     <p key={index}>{thing}</p>
//   ));

//   const addThingButton = <button onClick={addThing}>add thing</button>;

//   return (
//     <>
//       {addThingButton}
//       {thingselements}
//     </>
//   );
// }

// export default function Project() {
//   //state
//   const [isGoingOut, setIsGoingOut] = React.useState(false);

//   function toggleBoxOnIsGoingOut() {
//     setIsGoingOut((prevState) => !prevState);
//   }

//   return (
//     <>
//       <h1>Do I feel like going out tonight</h1>
//       <p onClick={toggleBoxOnIsGoingOut}>{isGoingOut ? "Yep" : "Nope"}</p>
//     </>
//   );
// }

// function Count(props) {
//   console.log("Count component rendered");

//   return (
//     <>
//       <h1>{props.number} </h1>
//       <button onClick={props.add}>+</button>
//       <button onClick={props.subtract}>-</button>
//     </>
//   );
// }

// function Count2() {
//   console.log("Count2 component rendered");

//   return (
//     <>
//       <h1>count2</h1>
//     </>
//   );
// }

// export default function Project() {
//   const [count, setCount] = React.useState(0);

//   console.log("Project component rendered");

//   function addToCount() {
//     setCount((prevState) => prevState + 1);
//   }

//   function subtractFromCount() {
//     setCount((prevState) => prevState - 1);
//   }

//   return (
//     <>
//       <Count
//         number={count}
//         add={addToCount}
//         subtract={subtractFromCount}
//       ></Count>
//       <Count2></Count2>
//     </>
//   );
// }
//#endregion
