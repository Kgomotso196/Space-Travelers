import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Profile from './components/Profile';

function App() {
  return (
    <>
     <NavBar />
     <main>
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/missions" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
