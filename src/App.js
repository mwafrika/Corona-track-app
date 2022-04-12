/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cases from './components/cases';
import { getAllCases } from './redux/actions';
import Case from './components/case';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCases());
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' index element={<Cases />} />
        <Route path='/country/:id' index element={<Case />} />
      </Routes>
    </Router>
  );
};

export default App;
