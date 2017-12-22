import React from 'react';

export const PostCollapsed = ({
  title,
  author,
  selftext,
  ups,
  thumbnail,
  id,
  created_utc,
  toggleExpanded
}) => (
  <section className="post post-collapse">
    <header>
      <button onClick={toggleExpanded}>
        <h3 className="post-title">{title}</h3>
      </button>
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
  created_utc,
  toggleExpanded
}) => (
  <section className="post post-expand">
    <header>
      <div>
        <button onClick={toggleExpanded}>
          <h3 className="post-title">{title}</h3>
        </button>
        <p className="post-author"><span>{ups}+</span> by {author}</p>
      </div>
    </header>
    <p className="post-body">{selftext}</p>
  </section>
);
