import * as types from '../constants/ActionTypes';

const initialState = {
  entries:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SETENTRIES:
      return Object.assign({}, state, { entries:action.entries });
    default:
      return state;
  }
};
