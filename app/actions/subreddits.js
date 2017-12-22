import { getToApi } from '../utils/api';
import action from './utils';

export const RECEIVE_SUBREDDIT = 'RECEIVE_SUBREDDIT';
export const REMOVE_SUBREDDIT = 'REMOVE_SUBREDDIT';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export const addSubreddit = ({ name, id }) => dispatch => (
  getToApi(`/r/${name}/new.json?limit=4`)
    .then(payload => dispatch(action(RECEIVE_SUBREDDIT, { ...payload, id, name })))
    .catch(err => console.log(err))
);

export const removeSubreddit = id => dispatch => (
  dispatch(action(REMOVE_SUBREDDIT, { id }))
);

export const fetchAdditionalPosts = ({ name, id, lastPost }) => dispatch => (
  getToApi(`/r/${name}/new.json?limit=4&after=${lastPost}`)
    .then(payload => dispatch(action(RECEIVE_POSTS, { ...payload, id, name })))
    .catch(err => console.log(err))
);
