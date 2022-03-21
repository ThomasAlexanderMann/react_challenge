import React from "react";

export default function Project() {
  function handleChange(event) {
    console.log(event.target.value);
    let value = event.target.value;

    value += "tom was ere";
  }

  return (
    <form>
      <input type="text" onChange={handleChange}></input>
    </form>
  );
}
