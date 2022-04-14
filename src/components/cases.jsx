/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './navBar';
import './style.css';

const Cases = () => {
  const { cases } = useSelector((state) => state.cases);
  return (
    <>
      <NavBar />
      <ul className='list-container'>
        {cases.map((item) => (
          <Link key={item.id} to={`/country/${item.id}`}>
            <li className='h-full relative w-full flex items-end'>
              <div className='w-full flex justify-end'>
                <div className='text-2xl font-bold flex flex-col text-white'>
                  <p>{item.name}</p>
                  <p className='self-end'>{item.today_confirmed}</p>
                </div>
              </div>
              <span className='absolute right-0 top-0 text-2xl'>
                <FontAwesomeIcon icon={faCircleArrowRight} />
              </span>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Cases;
