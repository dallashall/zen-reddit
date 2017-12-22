import { combineReducers } from 'redux';
import session from './session';
import entities from './entities';

export default combineReducers({
  session,
  entities,
});
