import React from 'react';
import Subreddit from './subreddits';

export default ({ subreddits }) => (
  <main>
    {console.log(subreddits)}
    {
      subreddits.map(({ id, name }) => <Subreddit key={`sub-${id}`} id={id} title={name} />)
    }
  </main>
);
