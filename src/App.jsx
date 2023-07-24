import { Routes, Route } from "react-router-dom";
import Nav from "./Components/NavBar";
import About from "./Pages/about";
import Home from "./Pages/home";
import MyStock from "./pages/MyStock";
import Stock from "./Pages/Stock";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <div>
      <Nav />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/mystock"
          element={<MyStock />}
        />
        <Route
          path="/stocks"
          element={<Dashboard />}
        />
        <Route
          path="/stocks/:symbol"
          element={<Stock />}
        />
      </Routes>
    </div>
  );
}

export default App;
