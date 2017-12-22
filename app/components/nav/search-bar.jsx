import React from 'react';
import Search from './search';
import FollowList from './follow_list';

export default ({
  subreddits,
  addSubreddit,
  removeSubreddit,
  autocompleteOptions,
  autocomplete,
  clearSearch,
}) => (
  <nav className="side-menu">
    <Search
      addSubreddit={addSubreddit}
      autocompleteOptions={autocompleteOptions}
      autocomplete={autocomplete}
      clearSearch ={clearSearch}
    />
    <FollowList
      subreddits={subreddits}
      removeSubreddit={removeSubreddit}
    />
  </nav>
);
