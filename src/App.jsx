import d6 from './1d6.png';
import d62 from './2d6.png';
import d63 from './3d6.png';
import d64 from './4d6.png';
import d65 from './5d6.png';
import d66 from './6d6.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';

import './App.css';

document.addEventListener('contextmenu', event => event.preventDefault());
function App() {
  const [dado,setValor]=useState(d6);
  const [resultad,setRes]=useState(1);

  function roll(){
    let resultado=Math.random()*(7-1)+1;
    resultado=parseInt(resultado);
    console.log(resultado);
    // eslint-disable-next-line default-case
    switch (resultado) {
      case 1:
        setValor(d6);
        setRes(1);
        break;
        case 2:
          setValor(d62);
          setRes(2);
          break;
          case 3:
          setValor(d63);
          setRes(3);
          break;
          case 4:
            setValor(d64);
            setRes(4);
            break;
            case 5:
              setValor(d65);
              setRes(5);
              break;
              case 6:
              setValor(d66);
              setRes(6);
              break;
    }
  }
  return (
    <div className="App">
      <div className="dados">
        <img src={dado} draggable="false"
         className="dado"></img>
        <h1>{resultad}</h1>
      </div>

    <Button className="btn-roll"
      onClick={()=>roll()}
      variant="outline-light"><b>Roll</b></Button>{' '}

      <footer>
        <center>
          <i>Copyright © 2022 Francisco Weslley Silva de Souza</i>
        </center>
      </footer>
    </div>
  );
}

export default App;
