import { combineReducers } from 'redux';
import autocomplete from './autocomplete';
import posts from './posts';
import subreddits from './subreddits';

export default combineReducers({
  autocomplete,
  posts,
  subreddits,
});
