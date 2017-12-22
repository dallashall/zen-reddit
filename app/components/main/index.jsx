import { connect } from 'react-redux';
import Main from './main';

const mapStateToProps = ({ entities }) => {
  return ({
    subreddits: entities.subreddits,
  });
};

export default connect(mapStateToProps, undefined)(Main);
