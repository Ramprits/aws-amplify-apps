import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import IndexPage from './pages/Index.js';
import LoginPage from './pages/Login.js';
import RegisterPage from './pages/Register.js';
import ContactPage from './pages/Contact.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<IndexPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
