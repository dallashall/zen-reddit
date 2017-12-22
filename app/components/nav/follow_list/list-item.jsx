import React from 'react';

export default ({ name, id, removeSubreddit }) => (
  <section className="side-menu-followed-subreddit">
    <a href={`#${id}`}>
      <h3>{name}</h3>
    </a>
    <button onClick={() => removeSubreddit(id)} >X</button>
  </section>
);
