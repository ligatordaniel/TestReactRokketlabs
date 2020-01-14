import React, { Component } from 'react';
import './Stylesheet.css';

export default class Footer extends Component {
  render() {
    return (
          <footer>
            <div className="teal lighten-2 row divFooter">              
              <a className="waves-effect waves-light btn-small red lighten-2 hoverable"
              target="blank" href="https://ligatordaniel.github.io/PortafolioWebDani/">© 2020 Copyright Daniel Ulloa</a>
            </div>
          </footer>
    );
  }
}
