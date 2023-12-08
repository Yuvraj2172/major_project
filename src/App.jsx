// App.js

import React from "react";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Pitch from "./components/Pitch";
import { Form } from "./components/PitchForm";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pitch" element={<Pitch />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;

