import { combineReducers } from 'redux';
import autocomplete from './autocomplete';
import comments from './comments';
import posts from './posts';
import subreddits from './subreddits';

export default combineReducers({
  autocomplete,
  comments,
  posts,
  subreddits,
});
