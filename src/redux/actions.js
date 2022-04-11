import { GET_ALL, GET_SINGLE } from './actionType';
import * as API from './api';

const getAllCases = () => async (dispatch) => {
  dispatch({
    type: GET_ALL,
    payload: data,
  });
};

export default reducers;
