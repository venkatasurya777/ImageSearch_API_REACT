import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onUserSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment" style={{ backgroundColor: "skyblue" }}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              placeholder="Search for images"
              type="text"
              value={this.state.term}
              onChange={(e) => {
                this.setState({ term: e.target.value.toUpperCase() });
              }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
