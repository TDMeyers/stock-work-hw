import { Routes, Route, Navigate } from 'react-router-dom';
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
