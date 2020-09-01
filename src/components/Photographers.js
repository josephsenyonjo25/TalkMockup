import React, {Component} from 'react';
import '../App.css';


class Photographers extends Component {
    render() {
      return (
        <div className="Photographers">
             <p className="title">FASHION PHOTOGRAPHERS</p>
             <div id="photo">
            <div>
             <img src ={require('../images/Paolo-Roversi.jpg')} />
             <p className="name">Paolo Roversi</p>
             <p className ="phototext">"MY LIFE IS FULL OF PICTURES I DIDN'T TAKE"</p>
            </div>
            <div>
             <img src ={require('../images/Nick-Knight.jpg')} />
             <p className="name">Nick Knight</p>
             <p className="phototext">"I COMMIT WITH MY HEART AND SOUL"</p>
            </div>
            <div>
             <img src ={require('../images/Willy-Vanderperre.jpg')} />
             <p className="name">Willy Vanderperre</p>
             <p className="phototext">"YOU HAVE TO CONSTANTLY REINTERPRET"</p>
            </div>
         </div>
        </div>
      );
    }
  }
  export default Photographers;



 