import React from 'react';
import './App.css';

//Design imports
import 'materialize-css/dist/css/materialize.css'
import 'material-icons/iconfont/material-icons.css'


//components
import TagFinder from './components/TagFinderComponent';
import Footer from './components/FooterComponent';


//install dependencies --->  npm install
//run in a localhost ----->npm start


class App extends React.Component {
  render() {
    return (
      <div>     
      <TagFinder/>
      <Footer/>      
      </div>
    )
  }
}


export default App;
