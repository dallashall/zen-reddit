import React from 'react';
import Post from './post';

export default ({ posts, fetchAdditionalPosts, title, id }) => (
  <article className="subreddits">
    <h2 id={id}>{title}</h2>
    {
      posts.map(post => <Post key={`key-${post.data.id}`} {...post.data} fetchAdditionalPosts={fetchAdditionalPosts} />)
    }
    <footer className="subreddit-footer">
      <button className="btn-load-more" onClick={() => fetchAdditionalPosts({name: title, id, lastPost: posts[posts.length - 1].data.name })}>Fetch More Posts</button>
    </footer>
  </article>
);
