import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Ideas } from './ideas';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      ideas: Ideas
    })
    , applyMiddleware(thunk, logger)
  );
  return store;
}
