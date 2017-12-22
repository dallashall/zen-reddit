import React from 'react';

export const PostCollapsed = ({
  title,
  author,
  body,
  ups,
  thumbnail,
  id,
  created_utc,
  secure_media_embed
}) => (
  <section className="post post-collapse">
    <header>
      <h3 className="post-title">{title}</h3>
      <p className="post-body">{body}</p>
      <p className="post-author"><span>{ups}+</span> by {author}</p>
    </header>
    <img className="thumbnail thumbnail-placeholder" src={thumbnail} alt="" />
  </section>
);

export const PostExpanded = ({
  title,
  author,
  body,
  ups,
  thumbnail,
  id,
  created_utc,
  secure_media_embed
}) => (
  <section className="post post-expand">
    <header>
      <div>
        <h3 className="post-title">{title}</h3>
        <p className="post-author"><span>{ups}+</span> by {author}</p>
      </div>
    </header>
    <iframe
      title={`embeded content for ${title}`}
      src={secure_media_embed.media_domain_url}
      width={secure_media_embed.width}
      height={secure_media_embed.height}
      scrolling="no"
      frameBorder="0"
    />
    <p className="post-body">{body}</p>
  </section>
);
