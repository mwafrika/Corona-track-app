/* eslint-disable react/prop-types */
/* eslint-disable jsx-quotes */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ OnChange, search }) => (
  <div className='flex w-full justify-center items-center h-28'>
    <form className='relative w-1/2'>
      <input
        type='text'
        name='search'
        placeholder='Search available cases ...'
        value={search}
        onChange={OnChange}
        className='h-10 bg-white focus:outline-none w-full focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block appearance-none leading-normal'
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className='absolute right-2 top-2 text-sky-900 text-2xl'
      />
    </form>
  </div>
);

export default SearchBar;
