import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [str, setStr] = useState("");
  const [stringSet, setStringSet] = useState(false);

  useEffect(() => {
    console.log(str, stringSet);
  }, [str, stringSet]);

  const onChangeHandler = (evt) => {
    setStr(evt.target.value);
    if (evt.target.value !== "" && evt.target.value !==  null && evt.target.value !== undefined) {
      setStringSet(true);
    } else {
      setStringSet(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to set.."
        onChange={onChangeHandler}
      ></input>
      <h1>{str}</h1>
    </div>
  );
}

export default App;
