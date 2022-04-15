/* eslint-disable jsx-quotes */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './navBar';
import SearchBar from './searchBar';
import './style.css';
import { getAllCases } from '../redux/actions';

const Cases = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { cases } = useSelector((state) => state.cases);
  const query = new URLSearchParams(location.search);
  const searchCase = query.get('search') || '';
  const [search, setSearch] = useState(searchCase);
  const navigate = useNavigate();
  const countries = cases.filter((country) => country.name.toLowerCase().includes(search));
  // filteredCountries(countries);
  const OnChange = (event) => {
    navigate(event.target.value ? `?search=${event.target.value}` : '');
    setSearch(event.target.value);
  };
  console.log(query, 'My search tester');

  useEffect(() => {
    dispatch(getAllCases());
  }, []);

  return (
    <>
      <NavBar />
      <SearchBar OnChange={OnChange} search={search} />
      <ul className='list-container'>
        {countries.map((item) => (
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
