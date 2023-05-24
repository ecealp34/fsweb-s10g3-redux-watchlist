import { legacy_createStore as createStore } from 'redux';
import reducer from '../reducers/moviesReducer';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'

const store = createStore(
  reducer,
  applyMiddleware(logger)
)

export default store;
