import { GET_ALL, GET_SINGLE } from './actionType';
import * as API from './api';

export const getAllCases = () => async (dispatch) => {
  const { data } = await API.retrieveCases();
  const {
    dates: {
      '2020-03-22': { countries },
    },
  } = data;

  const countryArray = Object.values(countries);
  console.log(countryArray, 'my Actions');

  dispatch({
    type: GET_ALL,
    payload: countryArray,
  });
};

export const getSingleCases = (country) => async (dispatch) => {
  const { data } = await API.retrieveSingle(country);
  dispatch({
    type: GET_SINGLE,
    payload: data,
  });
};
