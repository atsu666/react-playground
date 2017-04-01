import * as types from '../constants/ActionTypes';

const initialState = {
  entries:[]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SETENTRIES:
      console.log(action.entries);
      return Object.assign({}, state, { entries:action.entries });
    default:
      return state;
  }
};

