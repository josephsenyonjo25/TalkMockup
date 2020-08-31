import React, {Component} from 'react';
import '../App.css';


class MostRead extends Component {
    render() {
      return (
        <div id="MostRead">
         <p className="title">MOST READ INTERVIEWS</p>
         <div id= "mostReadInterviews">
         <div>
             <img src ={require('../images/MUSIC-Alicia-Keys.jpg')} />
             <p className="name">Alicia Keys</p>
             <p className="quote">"I CAN'T BE HELD BACK ANYMORE"</p>
         </div>
         <div>
             <img src ={require('../images/Chilly-Gonzales.jpg')} />
             <p className="name">Chilly Gonzalez</p>
             <p className="quote"> "I TRY TO PULL THE CURTAIN BACK"</p>
         </div>
         <div>
             <img src ={require('../images/Kevin-Kline.jpg')} />
             <p className="name">Kevin Kline</p>
             <p className="quote">"IT'S A DIFFERENT SORT OF THRILL"</p>
         </div>
         </div> 
        </div>
      );
    }
  }
  export default MostRead;



 