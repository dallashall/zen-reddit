import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }
  
  componentDidMount() {
    this.props.addSubreddit({name: 'news', id:'t5_2qh3l'});
  }

  update = (e) => {
    this.setState({ query: e.target.value }, () => {
      this.props.autocomplete(this.state.query);
    });
  }

  add = (name) => {
    return e => {
      e.preventDefault();
      this.props.addSubreddit(name);
      this.setState({query: ""});
      this.props.clearSearch();
    }
  }

  render() {
    return (
      <section className="search">
        <h2>Search Subreddits</h2>
        <form className="search-form" onSubmit={e => e.preventDefault()}>
          <input
            onChange={this.update}
            value={this.state.query}
            type="search"
            name="search"
          />
          <ul id="search-list">
            {
              this.props.autocompleteOptions.map(({id, name}) => (
                <li key={name}>
                  <button onClick={this.add({ name, id })}>{name}</button>
                </li>
              ))
            }
          </ul>
        </form>
      </section>
    );
  }
}

export default Search;
