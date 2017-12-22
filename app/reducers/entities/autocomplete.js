import { RECEIVE_OPTIONS } from '../../actions/autocomplete';

const defaultState = {
  options: [],
};

export default (state = defaultState, action) => {
  console.log(action);
  switch (action.type) {
    case RECEIVE_OPTIONS:
      const options = action.payload.subreddits;
      return { options };
    default:
      return state;
  }
};
