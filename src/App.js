import React from 'react';
import './App.css';

//Diseño
import 'materialize-css/dist/css/materialize.css'
import 'material-icons/iconfont/material-icons.css'



//components
import Navbar from './components/NavbarComponent';
import PostList from './components/PostComponent';
import Footer from './components/FooterComponent';

//https://www.youtube.com/watch?v=zIY87vU33aA
//npm start


class App extends React.Component {
  render() {
    return (
      <div>     
      <Navbar/>
      <PostList/>
      <Footer/>      
      </div>
    )
  }
}


export default App;
