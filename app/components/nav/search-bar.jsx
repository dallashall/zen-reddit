import React from 'react';
import Search from './search';
import FollowList from './follow_list';

export default ({
  subreddits,
  addSubreddit,
  removeSubreddit,
  autocompleteOptions,
  autocomplete
}) => (
  <nav className="side-menu">
    <Search
      addSubreddit={addSubreddit}
      autocompleteOptions={autocompleteOptions}
      autocomplete={autocomplete}
    />
    <FollowList
      subreddits={subreddits}
      removeSubreddit={removeSubreddit}
    />
  </nav>
);
