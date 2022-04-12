/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleCases } from '../redux/actions';
import Case from './case';

const Cases = () => {
  const dispatch = useDispatch();
  const { cases } = useSelector((state) => state.cases);

  return (
    <div className='flex justify-between'>
      <div>
        {cases.map((item) => (
          <div key={item.id} onClick={() => dispatch(getSingleCases(item.id))}>
            {item.name}
          </div>
        ))}
      </div>
      <Case />
    </div>
  );
};

export default Cases;
