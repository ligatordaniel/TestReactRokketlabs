import React, { Component } from 'react';
import axios from 'axios';
import PostComponent from './PostComponent';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};  //input vacio

    this.handleChange = this.handleChange.bind(this);   //input catches every letter
    this.handleSubmit = this.handleSubmit.bind(this);    //Enter works
  }

  handleChange(event) {                                 
    this.setState({value: event.target.value.toLowerCase()});    //input change into lowercase 
    console.log('change', event.target.value);
  }

  handleSubmit(event) {
    const url = 'https://n161.tech/api/dummyapi/tag';
    axios.get(`${url}`+ '/' + `${this.state.value}` + '/post')
        .then(res => {
            console.log(res.data.data)

        })
        .catch ( error => {
            console.log(error)
            this.setState({errorMsg: 'error retreaiving data'})
        })
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();           //cancela evento, no refrescar pagina
  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper teal lighten-2">
            <form onSubmit={this.handleSubmit}>
              <div className="input-field">
                <input value={this.state.value} onChange={this.handleChange} id="search" type="search" required></input>
                <label className="label-icon" for="search"><i class="material-icons">search</i></label>
                <i className="material-icons">close</i>
              </div>
            </form>
          </div>
        </nav>
        <PostComponent tagName={this.state.tag}></PostComponent>
      </div>

      
    );
  }
}