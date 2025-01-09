import './App.css';
import React from 'react';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import { UserStorage } from './UserContext';
import Login from './Components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
