import { getToApi } from '../utils/api';
import action from './utils';

export const RECEIVE_SUBREDDIT = "RECEIVE_SUBREDDIT";
export const addSubreddit = name => dispatch => (
  getToApi(`/r/${name}/hot.json?limit=4`)
    .then(payload => dispatch(action(RECEIVE_SUBREDDIT, payload)))
    .catch(err => console.log(err))
);
