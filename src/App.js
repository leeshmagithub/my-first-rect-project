import { useState } from "react";
import "./App.css";

const colors = ["green", "red", "blue", "violet", "pink"];

const array = colors.map((el) => {
  return { color: el };
});

const filteredArray = colors
  .filter((el) => {
    return el.includes("e");
  })
  .map((el1) => {
    return { color: el1 };
  });

console.log(array);
console.log(filteredArray);
function App() {
  return (
    <div>
      {array.map((el) => {
        return <div key={el.color} style={{ color: el.color }}>{el.color}</div>;
      })}
    </div>
  );
}

export default App;
