/* eslint-disable max-len */
/* eslint-disable no-case-declarations */
import { GET_ALL, GET_SINGLE } from './actionType';

const intialState = {
  cases: [],
  singleCase: {},
};
const reducers = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        cases: action.payload,
      };
    case GET_SINGLE:
      console.log(
        {
          ...state,
          singleCase: action.payload,
        },
        'my single red',
      );
      return {
        ...state,
        singleCase: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
