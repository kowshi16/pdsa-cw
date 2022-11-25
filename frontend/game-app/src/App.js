import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Knapsack from "./pages/Knapsack";
import MinimumConnecters from "./pages/MinimumConnecters";
import ShortestPath from "./pages/ShortestPath";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/knapsack" element={<Knapsack />} />
        <Route path="/connectors" element={<MinimumConnecters />} />
        <Route path="/paths" element={<ShortestPath />} />
      </Routes>
    </>
  );
};

export default App;
