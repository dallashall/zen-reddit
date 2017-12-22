import { connect } from 'react-redux';
import SearchBar from './search-bar';
import { autocomplete, clearSearch } from '../../actions/autocomplete';
import { addSubreddit, removeSubreddit } from '../../actions/subreddits';

const mapStateToProps = ({ entities }) => ({
  autocompleteOptions: entities.autocomplete.options,
  subreddits: entities.subreddits,
});

const mapDispatchToProps = dispatch => ({
  autocomplete: payload => dispatch(autocomplete(payload)),
  addSubreddit: subInfo => dispatch(addSubreddit(subInfo)),
  removeSubreddit: payload => dispatch(removeSubreddit(payload)),
  clearSearch: () => dispatch(clearSearch()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
