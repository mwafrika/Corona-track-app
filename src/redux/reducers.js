import { GET_ALL, GET_SINGLE } from './actionType';

const intialState = {
  items: [],
  item: {},
};
const reducers = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        items: action.payload,
      };
    case GET_SINGLE:
      return {
        ...state,
        item: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
