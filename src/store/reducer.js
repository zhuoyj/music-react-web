import { combineReducers } from 'redux-immutable';

import { reducer as recommendReducer } from '../pages/discover/c-pages/recommend/store';
// import { reducer as playerReducer } from '../pages/player/store';


//redux-immutable的combineReducers会将里面的对象转成immutable对象
const cReducer = combineReducers({
  recommend: recommendReducer,
  // player: playerReducer
});

export default cReducer;
