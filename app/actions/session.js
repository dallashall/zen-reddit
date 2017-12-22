import { getToApi } from '../utils/api';
import action from './utils';

export const RECEIVE_SESSION = 'RECEIVE_SESSION';
export const fetchSession = () => dispatch => (
  getToApi('/api/me.json')
    .then(payload => dispatch(action(RECEIVE_SESSION, payload)))
    .catch(err => console.log(err))
);
