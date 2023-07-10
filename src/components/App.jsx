// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";

const App = () => {
  return (
    <>
      <Nav />
        <Routes>
          <Route exact path="/"  element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/user" element={<User />}/>
        </Routes>
    </>
  );
};

export default App;
