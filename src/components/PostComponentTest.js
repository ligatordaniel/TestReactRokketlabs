import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://n161.tech/api/dummyapi';
//https://cors-anywhere.herokuapp.com/

class PostComponentTest extends Component {
  state = {
    posts: []
  }
  componentDidMount() {
    const url = `${API_URL}/post`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ posts: data.data })
      console.log(this.state.posts)
     })
  }

  render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>All Posts</h1>
       

        </div>
       </div>
    );
  }

}
export default PostComponentTest;