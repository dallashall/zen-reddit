import React, { Component } from 'react';
import * as Embed from  './types/embed';
import * as Link from  './types/link';
import * as Self from  './types/self';

class Post extends Component {
  constructor() {
    super();
    this.state = {
      expanded: false,
    }
  }

  toggleExpanded = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    const { post_hint } = this.props;
    const props = this.props;
    const { expanded } = this.state;
    switch (post_hint) {
      case "rich:video":
        return expanded ? (
          <Embed.PostExpanded {...props} toggleExpanded={this.toggleExpanded} />
        ) : (
          <Embed.PostCollapsed {...props} toggleExpanded={this.toggleExpanded} />
        );
      case "self":
        return expanded ? (
          <Self.PostExpanded {...props} toggleExpanded={this.toggleExpanded} />
        ) : (
          <Self.PostCollapsed {...props} toggleExpanded={this.toggleExpanded} />
        );
      default:
        return expanded ? (
          <Link.PostExpanded {...props} toggleExpanded={this.toggleExpanded} />
        ) : (
          <Link.PostCollapsed {...props} toggleExpanded={this.toggleExpanded} />
        );
    }
  }
}

export default Post;
