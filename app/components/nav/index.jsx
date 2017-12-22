import { connect } from 'react-redux';
import SearchBar from './search-bar';
import { autocomplete } from '../../actions/autocomplete';
import { addSubreddit, removeSubreddit } from '../../actions/subreddits';

const mapStateToProps = ({ entities, session }) => ({
  autocompleteOptions: entities.autocomplete.options,
  subreddits: entities.subreddits,
  token: session.token,
});

const mapDispatchToProps = dispatch => ({
  autocomplete: payload => dispatch(autocomplete(payload)),
  addSubreddit: name => dispatch(addSubreddit(name)),
  removeSubreddit: payload => dispatch(removeSubreddit(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
