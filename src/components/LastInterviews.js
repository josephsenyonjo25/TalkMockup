import React, {Component} from 'react';
import '../App.css';


class LastInterviews extends Component {
    render() {
      return (
        <div className="LastInterviews">
        <p className="title">LATEST INTERVIEWS</p>
        <div id="lastimages">
         <div id ="img1">
             <img src ={require('../images/Keira-Knightley.jpg')} />
             <p className="name">Keira Knightley</p>
             <p className ="quote">"IT'S THE JOY OF GROWING UP"</p>
         </div>
         <div id ="img2">
             <img src ={require('../images/Hillary-Swank.jpg')} />
             <p className="name">Hillary Swank</p>
             <p className ="quote">"YOU'VE GOT TO TRUST YOUR INSTINCTS"</p>
         </div>
         <div id="img3">
             <img src ={require('../images/Ludwig-Goranssen.jpg')} />
             <p className="name">Ludwig Goransson</p>
             <p className ="quote">"I'M BUILDING A PUZZLE"</p>
         </div>
         <div id="img4">
             <img src ={require('../images/Pedro-Almodovar.jpg')} />
             <p className="name">Pedro Almodovar</p>
             <p className ="quote">"KEEP IT ON THE RAILS"</p>
         </div>
         <div id="img5">
             <img src ={require('../images/Leo-Villareal.jpg')} />
             <p className="name">Leo Villareal</p>
             <p className ="quote">"THERE'S NO AGENDA"</p>
         </div>
         <div id="img6">
             <img src ={require('../images/Pierre-Herme.jpg')} />
             <p className="name">Pierre Herme</p>
             <p className ="quote">"IT COMES FROM CURIOSITY"</p>
         </div>
         <div id ="img7">
             <img src ={require('../images/Roger-Waters.jpg')} />
             <p className="name">Roger Waters</p>
             <p className ="quote">"WE ARE ON A KNIFE'S EDGE"</p>
         </div>
         <div id = "img8">
             <img src ={require('../images/Fabien-Baron.jpg')} />
             <p className="name">Fabien Baron</p>
             <p className ="quote">"WE'VE JUST SEEN THE BEGINNING"</p>
         </div>
         <div id ="img9">
             <img src ={require('../images/Simon-Starling.jpg')} />
             <p className="name">Simon Starling</p>
             <p className ="quote">"THE PRACTICE HAS ITS OWN MOMENTUM"</p>
         </div>
         </div>
      </div>   
      );
    }
  }
  export default LastInterviews;



 