import * as ActionTypes from './ActionTypes';
import {baseUrl} from '../shared/baseUrl';

const API_KEY_AIRTABLE = `${process.env.REACT_APP_API_KEY_AIRTABLE}`;

export const fetchIdeas = () => (dispatch) => {
  return fetch(baseUrl + API_KEY_AIRTABLE)
    /** TODO set up error catching */
    .then(response => response.json())
    .then(ideas => dispatch(addIdeas(ideas)));
}

export const sortIdeas = () => (dispatch) => {
  return fetch(baseUrl + API_KEY_AIRTABLE + `&sort[0][field]=Date&sort[0][direction]=desc`)
    /** TODO set up error catching */
    .then(response => response.json())
    .then(ideas => dispatch(addIdeas(ideas)));
}

export const addIdeas = (ideas) => ({
  type: ActionTypes.ADD_IDEAS
  , payload: ideas
});
