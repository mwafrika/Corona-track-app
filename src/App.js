/* eslint-disable jsx-quotes */
import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cases from './components/countries';
import { getAllCases } from './redux/actions';
import Case from './components/country';
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
        <Route path='/country/:id' element={<Case />} />
      </Routes>
    </Router>
  );
};

export default App;
