import { createStore } from 'redux';
import getDate from './reducers';

const store = createStore(getDate);
console.log(store.getState())
export { store };
