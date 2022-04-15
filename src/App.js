/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cases from './components/cases';
import { getAllCases } from './redux/actions';
import Case from './components/case';
import { retrieveCases } from './redux/api';

const App = () => {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cases);
  useEffect(() => {
    if (cases.length === 0) {
      retrieveCases().then((res) => {
        dispatch(getAllCases(res));
      });
    }
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
