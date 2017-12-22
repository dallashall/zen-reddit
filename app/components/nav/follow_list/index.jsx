import React from 'react';
import ListItem from './list-item';

export default ({subreddits, removeSubreddit }) => (
  <article className="side-menu-followed-subreddits">
    <h2>Currently Following</h2>
    {
     subreddits.map(({ id, name }) => (
        <ListItem key={`item-${id}`} name={name} id={id} removeSubreddit={removeSubreddit} />
      ))
    }
  </article>
);
