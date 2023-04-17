import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./js/pages/Home";
import LogInOut from "./js/pages/LogInOut";
import FilterPage from "./js/pages/FilterPage";
import Destination from "./js/pages/Destination";
import Register from "./js/pages/Register.jsx";
import RentalDetail from "./js/pages/RentalDetail";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="FilterPage" element={<FilterPage />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="LogInOut" element={<LogInOut />} />
          <Route path="Register" element={<Register />} />
          <Route path="RentalDetail/:id" element={<RentalDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
