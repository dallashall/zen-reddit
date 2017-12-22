import { RECEIVE_OPTIONS, CLEAR_SEARCH } from '../../actions/autocomplete';

const defaultState = {
  options: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_OPTIONS:
      const options = action.payload.subreddits;
      return { options };
    case CLEAR_SEARCH:
      return defaultState;
    default:
      return state;
  }
};
