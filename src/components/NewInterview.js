import React, {Component} from 'react';
import '../App.css';


class NewInterview extends Component {
    render() {
      return (
        <div id="NewInterview">
         <div id= "Matt">
             <p className="title">NEW INTERVIEW</p>
             <img src ={require('../images/Matt-Damon.jpg')} />
         </div>
         <div id="directory">
             <p className="title">INTERVIEW DIRECTORY</p>
             <div className ="celebrities">
                 <div className ="celebrity" id= "architecture">
                     <p>ARCHITECTURE</p>
                 </div>
                 <div className="celebrity" id ="art">
                     <p >ART</p>
                 </div>
                 <div className="celebrity" id="fashion">
                     <p >FASHION</p>
                 </div>
                 <div className="celebrity" id ="film">
                     <p >FILM</p>
                 </div>
                 <div className="celebrity" id ="food">
                     <p >FOOD</p>
                 </div>
                 <div className="celebrity" id="literature">
                     <p >LITERATURE</p>
                 </div>
                 <div className="celebrity" id ="music">
                     <p >MUSIC</p>
                 </div>
                 <div className="celebrity" id ="sports">
                     <p >SPORTS</p>
                 </div>
             </div>
         </div>
        </div>
      );
    }
  }
  export default NewInterview;



 