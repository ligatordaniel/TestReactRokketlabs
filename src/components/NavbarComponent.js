import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav >
          <div className="nav-wrapper teal lighten-2">
            <form>
              <div className="input-field">
                <input id="search" type="search" required></input>
                <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}
