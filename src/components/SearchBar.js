import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call prop callback from App Component
  }

  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video Search</label>
            <input type="text" value={this.state.term} onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
