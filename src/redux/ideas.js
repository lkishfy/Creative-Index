import * as ActionTypes from './ActionTypes';

export const Ideas = (state = {
  ideas: []
  }, action) => {
  switch(action.type) {
    case ActionTypes.ADD_IDEAS:
      return {...state, ideas: action.payload};
    default:
      return state;
  }
};
