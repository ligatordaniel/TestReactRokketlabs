import React, { Component } from 'react'
import axios from 'axios'

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
            console.log(res)
            this.setState({posts: res.data})

        })
        .catch ( error => {
            console.log(error)
            this.setState({errorMsg: 'error retreaiving data'})
        })
    }



    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                <h1>Componente Post</h1>
                {
                    posts.length ?
                    posts.map(post=> <div key={post.id}>{post.tittle}</div>) : 
                    null
                }
                { errorMsg ? <div> {errorMsg} </div> : null}
            </div>
        )
    }
}

export default PostComponent;
