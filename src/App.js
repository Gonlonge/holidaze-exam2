import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./js/pages/Home";
import LogInOut from "./js/pages/LogInOut";
import FilterPage from "./js/pages/FilterPage";
import Destination from "./js/pages/Destination";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="FilterPage" element={<FilterPage />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="LogInOut" element={<LogInOut />} />
          {/* <Route path="RentalDetail/:id" element={<RentalDetail />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
