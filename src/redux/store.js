import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import musicReducer from './reducers/musicReducer.js';

const rootReducer = combineReducers({
  music: musicReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
