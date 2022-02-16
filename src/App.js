import React from 'react';
import Toasts from './components/toasts';
import Tables from './components/table';
import Navigation from './components/navLinks';
import HomePage from './components/home';
import { Routes, Route } from 'react-router-dom';
import TestComponent from './components/test';
import ModalWindow from './components/modal';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/table" element={<Tables />} />
        <Route path="/toasts" element={<Toasts />} />
        <Route path="/modal" element={<ModalWindow />} />
      </Routes>
    </div>
  );
}

export default App;
