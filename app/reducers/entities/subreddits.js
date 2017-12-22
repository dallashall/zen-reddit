import { 
  RECEIVE_SUBREDDIT,
  REMOVE_SUBREDDIT,
} from '../../actions/subreddits';

const defaultState = [];

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case RECEIVE_SUBREDDIT:
      const subreddit = { name: payload.name, id: payload.id };
      return [subreddit, ...state];
    case REMOVE_SUBREDDIT:
      const idx = state.findIndex(obj => obj.id === payload.id);
      return state.slice(0, idx).concat(state.slice(idx + 1));
    default:
      return state;
  }
};
