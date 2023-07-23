import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Pages/About";
import Home from "./Pages/Home";
import MyStock from "./Pages/MyStock";
import Stock from "./Pages/Stock";
import Dashboard from "./Pages/Dashboard";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          element={<Home />}
          path="/"
        />
        <Route
          element={<About />}
          path="/about"
        />

        <Route
          element={<Stock />}
          path="/stock/:symbol"
        />
        <Route
          element={<Dashboard />}
          path="/stock"
        />
        <Route
          element={<Following />}
          path="/follow"
        />
      </Routes>
    </>
  );
}

export default App;
