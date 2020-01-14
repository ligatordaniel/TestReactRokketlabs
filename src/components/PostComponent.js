import React, { Component } from 'react'
import axios from 'axios'
import './Stylesheet.css';

class PostComponent extends Component {
    constructor(props) {
        super (props)

        this.state = {
            posts: []
        
    }
}

    componentDidMount() {
        axios.get('https://n161.tech/api/dummyapi/post')
        .then(res => {
            this.setState({posts: res.data.data})

        })
        .catch ( error => {
            console.log(error)
            this.setState({errorMsg: 'error retreaiving data'})
        })
    }



    render() {

        return (
            <div>
                
                {this.state.posts.map((post) => (
                    

                <div className="row cardPost ">
                    <div className="col s12 ">
                      <div className="card hoverable">
                        <div className="card-image">

                            <div className="row">
                            <div class="col 6 divProfile">
                            <img className="imgProfile" style={{'borderRadius':'50%'}} src={post.owner.image}/>
                            </div>
                            <div class="col 6">
                            <spam class="profileSpam">{post.owner.nameTitle}. {post.owner.firstName} {post.owner.lastName}</spam>
                            </div>
                            
                            </div>

                            <img className="imgPost" src={post.image}/>
                            <a className="btn-floating btn-large halfway-fab waves-effect waves-light red lighten-2 hoverable">
                            <i className="material-icons">add</i>
                            </a>
                                
                            <div className="card-content">
                                <p>{post.message}</p>
                            </div>

                            <div className="card-action">
                                <a href="#">{post.tags[1]}</a>
                                <a href="#">{post.tags[2]}</a>
                                <a href="#">{post.tags[3]}</a>
 
                            </div>
                            
                        </div>
                      </div>
                    </div>
                </div>
                
            ))}
                
            </div>
        


        )
    }
}

export default PostComponent;
