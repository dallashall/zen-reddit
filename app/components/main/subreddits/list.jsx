import React from 'react';
import Post from './post';

export default ({ posts, fetchMorePosts, title, id }) => (
  <article className="subreddits">
    {console.log(posts)}
    <h2 id={id}>{title}</h2>
    {
      posts.map(post => <Post key={`key-${id}`} {...post} fetchMorePosts={fetchMorePosts} />)
    }
  </article>
);
