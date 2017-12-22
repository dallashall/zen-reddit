import { RECEIVE_SESSION } from '../actions/session';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SESSION:
      return { xModhash: action.payload };
    default:
      return state;
  }
};
