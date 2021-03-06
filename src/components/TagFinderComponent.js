import React, { Component } from 'react';
import axios from 'axios';

export default class TagFinderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '',  //input empty at the beginning
                  posts: []  }; 
         
    this.handleChange = this.handleChange.bind(this);   //input catches every letter
    this.handleSubmit = this.handleSubmit.bind(this);    //Enter works
  }

  // GetRequest at the at the beginning of app with all posts
  componentDidMount() { 
    axios.get('https://n161.tech/api/dummyapi/post')
    .then(res => {
        this.setState({posts: res.data.data})
    })
    .catch ( error => {
        console.log('error retreaiving data of all post')
    })
}

  handleChange(event) {                                 
    this.setState({value: event.target.value.toLowerCase()});    //input change into lowercase 
  }

  // GetRequest using navbar search  
  handleSubmit(event) {
    const url = 'https://n161.tech/api/dummyapi/tag';
    axios.get(`${url}`+ '/' + `${this.state.value}` + '/post')
        .then(res => {
            this.setState({posts: res.data.data})   //here comes data tag 'eg: interesting'
        })
        .catch ( error => {
            console.log('error retreaiving data tags')
        })

    event.preventDefault();              // prevent default, web refresh
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
        
        {this.state.posts.map((post) => (

        <div className="row cardPost" key={post.id}>
            <div className="col s12 ">
              <div className="card hoverable">
                <div className="card-image">

                    <div className="row">
                    <div className="col 6 divProfile">
                    <img className="imgProfile " style={{'borderRadius':'50%'}} src={post.owner.image}/>
                    </div>
                    <div className="col 6">
                    <spam className="profileSpam">{post.owner.nameTitle}. {post.owner.firstName} {post.owner.lastName}</spam>
                    </div>
                    
                    </div>

                    <img className="imgPost" src={post.image}/>
                    <a className="btn-floating btn-large halfway-fab waves-effect waves-light red lighten-2 hoverable">
                    <i className="material-icons">add</i>
                    </a>
                        
                    <div className="card-content">
                        <p>{post.message}</p>
                    </div>

                    <div className="card-action ">
                        <a href="#">{post.tags[1]}</a>
                        <a href="#">{post.tags[2]}</a>
                        <a href="#">{post.tags[3]}</a>
                        <a href="#">{post.tags[4]}</a>

                    </div>
                    
                </div>
              </div>
            </div>
        </div>

        ))}
      </div>

      
    );
  }
}