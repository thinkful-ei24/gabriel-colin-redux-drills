import { createStore } from 'redux';
import { gameReducer } from '../reducers/reducers';

console.log('hello store');
export default createStore(
  gameReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
