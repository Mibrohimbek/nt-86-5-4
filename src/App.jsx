import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Details from "./pages/Details";

function App() {
  return (
    <Routes>
      <Route path="/:productId" element={<Details/>}/>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<About />} />
    </Routes>
  );
}

export default App;
