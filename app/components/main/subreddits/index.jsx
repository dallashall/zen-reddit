import { connect } from 'react-redux';
import List from './list';
import { fetchAdditionalPosts } from '../../../actions/subreddits';

const mapStateToProps = ({ entities }, ownProps) => ({
  posts: entities.posts[ownProps.id],
});

const mapDispatchToProps = dispatch => ({
  fetchAdditionalPosts: payload => dispatch(fetchAdditionalPosts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
