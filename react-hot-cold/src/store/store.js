import { createStore } from 'redux';
import { gameReducer } from '../reducers/reducers';

console.log('hello store');
export default createStore(gameReducer);
