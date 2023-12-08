// App.js

import React from "react";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

import  {Form}  from "./components/Form";
import Home from "./components/Home";
import  Pitch  from "./components/Pitch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<Form />} />
          <Route path="/pitch" element={<Pitch />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
};

export default App;

