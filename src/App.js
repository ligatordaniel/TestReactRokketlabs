import React from 'react';
import './App.css';

//Diseño
import 'materialize-css/dist/css/materialize.css'

//components
import PostComponen from './components/PostComponent';
import PostComponenTest from './components/PostComponenTest';

//https://www.youtube.com/watch?v=zIY87vU33aA
//npm start

function Helloworld(props) {
  return (
    <div className="estiloComponente1">
    <h3>{props.title}</h3>
    <p>{props.subtitle}</p>
      
    </div>
  )
}


class App extends React.Component {
  render() {
    return (
      <div > This is my component:
      <PostComponen/>
      <PostComponenTest/>
      <Helloworld title="titulo1 " subtitle="subtitulo1" />
      <Helloworld title="titulo2 " subtitle="subtitulo2" />
      <Helloworld title="titulo2 " subtitle="subtitulo3" />
      </div>
    )
  }
}

/*const App = () => <div> This is my component: <Helloworld/> </div>  // 2ra Forma */

/*
function App() { // 1ra Forma
  return (
    <div> This is my component: 
      
      <Helloworld title="titulo1 " subtitle="subtitulo1" />
      <Helloworld title="titulo2 " subtitle="subtitulo2" />
      <Helloworld title="titulo2 " subtitle="subtitulo3" />
    
    
    </div>

  );
}*/

export default App;
