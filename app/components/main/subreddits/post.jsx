import React from 'react';
import * as Embed from  './types/embed';
import * as Link from  './types/link';
import * as Self from  './types/self';

export default (props) => {
  console.log(props);
  switch (props.post_hint) {
    case "rich:video":
      return props.expanded ? (
        <Embed.PostExpanded {...props} />
      ) : (
        <Embed.PostCollapsed {...props} />
      );
    case "self":
      return props.expanded ? (
        <Self.PostExpanded {...props} />
      ) : (
        <Self.PostCollapsed {...props} />
      );
    case "link":
      console.log('link');
      return props.expanded ? (
        <Link.PostExpanded {...props} />
      ) : (
        <Link.PostCollapsed {...props} />
      );
    default:
      return () => <div />;
  }
};
