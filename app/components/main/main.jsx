import React from 'react';
import Subreddit from './subreddits';

export default ({ subreddits }) => (
  <main>
    {
      subreddits.map(({ id, name }) => <Subreddit key={`sub-${id}`} id={id} title={name} />)
    }
    <footer>
      <p>by <a href="https://linkedin.com/in/dallasbhall">Dallas Hall</a></p>
    </footer>
  </main>
);
