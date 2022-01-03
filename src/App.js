import { NavLink, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";
import Login from "./components/Login";

function App() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/Login");
  }

  return (
    <div>
      <NavLink to="/Home">Home</NavLink>
      <br></br>
      <NavLink to="/About">About</NavLink>
      <br></br>
      <NavLink to="/ContactUS">ContactUS</NavLink>
      <br></br>
      <button onClick={navigateHandler}>login</button>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/ContactUS" element={<ContactUs />}></Route>
        <Route path="/Login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
