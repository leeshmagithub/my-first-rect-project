import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiResult, setApiResult] = useState({});

  useEffect(() => {
    fetch("https://reqres.in/api/users/1")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setApiResult(data.data);
          console.log(data.data);
        }, 3000);
      });
  }, []);

  return (
    <div>
      <div>
        {apiResult.first_name + " "}
        {apiResult.last_name}
      </div>
      <img src={apiResult.avatar} alt=""></img>
    </div>
  );
}

export default App;
