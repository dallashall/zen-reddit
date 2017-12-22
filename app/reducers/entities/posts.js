import {
  RECEIVE_SUBREDDIT,
  REMOVE_SUBREDDIT,
  RECEIVE_POSTS,
} from '../../actions/subreddits';

const defaultState = {};


export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_SUBREDDIT:
      return { ...state, [payload.id]: payload.data.children };
    case RECEIVE_POSTS:
      return ({
        ...state,
        [payload.id]: state[payload.id].concat(payload.data.children),
      });
    case REMOVE_SUBREDDIT:
      return Object.assign({}, state, { [payload.id]: [] });
    default:
      return state;
  }
};
