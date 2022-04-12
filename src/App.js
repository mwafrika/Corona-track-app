/* eslint-disable jsx-quotes */
import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Cases from './components/cases';

const App = () => (
  <Router>
    <Routes>
      <Route path='/' index element={<Cases />} />
    </Routes>
  </Router>
);

export default App;
