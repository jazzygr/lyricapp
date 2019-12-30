import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";

export class Search extends Component {
  state = {
    trackTitle: " "
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p4">
              <h1 className="display-4 text-center">
                <i className="fas fa-music"></i>Search for a Song
              </h1>
              <p className="lead text-center">Get the lyrics to any song!</p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
