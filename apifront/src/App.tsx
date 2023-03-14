import React, {useEffect, useState} from 'react';
import {Routes, Route, Router, Link} from "react-router-dom";
import './App.css';
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";


function App() {

  return (

      <div className="App">
          <div>
              <Header/>
          </div>
          <div>
              <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/body" element={<Body />} />
                  <Route path="/" element={<Home />} />
              </Routes>
          </div>
      </div>

  );
}

export default App;