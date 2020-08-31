import React, {Component} from 'react';
import '../App.css';


class LastInterviews extends Component {
    render() {
      return (
        <div id="LastInterviews">
        <p className="title">LATEST INTERVIEWS</p>
        <div id="lastimages">
         <div className ="img">
             <img src ={require('../images/Keira-Knightley.jpg')} />
             <p>Keira Knightley</p>
             <p className ="last">"IT'S THE JOY OF GROWING UP"</p>
         </div>
         <div className ="img">
             <img src ={require('../images/Hillary-Swank.jpg')} />
             <p>Hillary Swank</p>
             <p className ="last">"YOU'VE GOT TO TRUST YOUR INSTICTS"</p>
         </div>
         <div className="img">
             <img src ={require('../images/Ludwig-Goranssen.jpg')} />
             <p>Ludwig Goransson</p>
             <p className ="last">"I'M BUILDING A PUZZLE"</p>
         </div>
         <div className="img">
             <img src ={require('../images/Pedro-Almodovar.jpg')} />
             <p>Pedro Almodovar</p>
             <p className ="last">"KEEP IN ON RAILS"</p>
         </div>
         <div className="img">
             <img src ={require('../images/Leo-Villareal.jpg')} />
             <p>Leo Villareal</p>
             <p ClassName ="last">"THERE'S NO AGENDA"</p>
         </div>
         <div className="img">
             <img src ={require('../images/Pierre-Herme.jpg')} />
             <p>Pierre Herme</p>
             <p ClassName ="last">"IT COMES FROM CURIOSITY</p>
         </div>
         <div className ="img">
             <img src ={require('../images/Roger-Waters.jpg')} />
             <p>Roger Waters</p>
             <p ClassName ="last">"WE ARE ON A KNIFE'S EDGE"</p>
         </div>
         <div className = "img">
             <img src ={require('../images/Fabien-Baron.jpg')} />
             <p>Fabien Baron</p>
             <p className ="last">"WE'VE JUST SEEN THE BEGINNING</p>
         </div>
         <div className ="img">
             <img src ={require('../images/Simon-Starling.jpg')} />
             <p>Simon Starling</p>
             <p>"THE PRACTICE HAS ITS OWN MOMENTUM"</p>
         </div>
         </div>
      </div>   
      );
    }
  }
  export default LastInterviews;



 