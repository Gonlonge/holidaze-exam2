import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./js/pages/Home";
import LogIn from "./js/pages/LogIn";
import Destination from "./js/pages/Destination";
import Register from "./js/pages/Register.jsx";
import RentalDetail from "./js/pages/RentalDetail";
import Profile from "./js/pages/Profile";
import CreateVenue from "./js/pages/CreateVenue";
import RegisterAsManager from "./js/pages/RegisterAsManager";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Destination" element={<Destination />} />
          <Route path="Register" element={<Register />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="CreateVenue" element={<CreateVenue />} />
          <Route path="RegisterAsManager" element={<RegisterAsManager />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="RentalDetail/:id" element={<RentalDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
