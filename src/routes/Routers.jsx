import React from "react";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors/Doctors";
import DoctorDetails from "../pages/Doctors/DoctorDetails";
import UrgentCare from "../pages/UrgentCare";
import DentalImplants from "../pages/DentalImplants";
import RegularCheckups from "../pages/RegularCheckUps";
import TeethWhitening from "../pages/TeethWhitening";
import Crowns from "../pages/Crowns";
import CosmeticDentistry from "../pages/CosmeticDentistry";

import { Routes, Route } from "react-router-dom";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:id" element={<DoctorDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route path="/urgent-care" element={<UrgentCare />} />
      <Route path="/dental-implants" element={<DentalImplants />} />
      <Route path="/regular-checkups" element={<RegularCheckups />} />
      <Route path="/teeth-whitening" element={<TeethWhitening />} />
      <Route path="/services" element={<Crowns />} />
      <Route path="/cosmetic-dentistry" element={<CosmeticDentistry />} />
    </Routes>
  );
};

export default Routers;
