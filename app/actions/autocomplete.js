import { getToApi } from '../utils/api';
import action from './utils';

export const RECEIVE_OPTIONS = 'RECEIVE_OPTIONS';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export const autocomplete = query => dispatch => (
  getToApi(`/api/subreddit_autocomplete.json?query=${query}&include_over_18=false&include_profiles=true`)
    .then(payload => dispatch(action(RECEIVE_OPTIONS, payload)))
    .catch(err => console.log(err))
);
export const clearSearch = () => dispatch => (dispatch({ type: CLEAR_SEARCH }));
