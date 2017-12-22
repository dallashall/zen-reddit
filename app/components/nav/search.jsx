import React, { Component } from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  update = (e) => {
    this.setState({ query: e.target.value }, () => {
      this.props.autocomplete(this.state.query);
    });
  }

  add = (e) => {
    e.preventDefault();
    console.log(e.target);
    const name = e.target.value;
    this.setState({query: name}, () => this.props.addSubreddit(name))
  }

  render() {
    return (
      <section className="search">
        {console.log(this.props)}
        <h2>Search Subreddits</h2>
        <form className="search-form" onSubmit={this.add}>
          <input onInput={this.update} value={this.state.query} type="search" name="search" list="search-list"/>
          <datalist id="search-list">
            {
              this.props.autocompleteOptions.map(({id, name}) => (
                <option key={name} value={name}>{name}</option>
              ))
            }
          </datalist>
        </form>
      </section>
    );
  }
}

export default Search;
