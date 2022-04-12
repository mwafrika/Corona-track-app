import { GET_ALL, GET_SINGLE } from './actionType';

const intialState = {
  cases: [],
  case: {},
};
const reducers = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL:
      console.log(
        {
          ...state,
          cases: action.payload,
        },
        'my reducer',
      );
      return {
        ...state,
        cases: action.payload,
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
