import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllCases } from '../redux/actions';

const Cases = () => {
  const dispatch = useDispatch();
  const cases = useSelector((state) => state.cases || []);
  console.log('My cases', cases);
  useEffect(() => {
    dispatch(getAllCases());
  }, []);

  return (
    <div>
      {cases.length > 0
        ? cases.map((item) => <div key={item.id}>{item.name}</div>)
        : []}
    </div>
    // <p>data to be</p>
  );
};

/* <p key={case.id}>{case.name}</p> */

export default Cases;
