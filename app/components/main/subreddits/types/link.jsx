import React from 'react';

export const PostCollapsed = ({
  title,
  author,
  selftext,
  ups,
  thumbnail,
  id,
  created_utc,
}) => (
  <section className="post post-collapse">
    <header>
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{selftext}</p>
      <p className="post-author"><span>{ups}+</span> by {author}</p>
    </header>
    <img className="thumbnail thumbnail-placeholder" src={thumbnail} alt="" />
  </section>
);

export const PostExpanded = ({
  title,
  author,
  selftext,
  ups,
  thumbnail,
  id,
  url,
  created_utc,
}) => (
  <section className="post post-expand">
    <header>
      <div>
        <h3 className="post-title">{title}</h3>
        <p className="post-author"><span>{ups}+</span> by {author}</p>
      </div>
    </header>
    <a className="post-body">{url}</a>
  </section>
);
