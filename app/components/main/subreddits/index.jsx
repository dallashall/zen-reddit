import { connect } from 'react-redux';
import List from './list';

const mapStateToProps = ({ entities }, ownProps) => ({
  posts: entities.posts[ownProps.id],
});

const mapDispatchToProps = dispatch => ({
  fetchMorePosts: payload => dispatch(fetchMorePosts(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
