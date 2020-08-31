import React, {Component} from 'react';
import '../App.css';


class December extends Component {
    render() {
      return (
        <div className="December">
              <h3>MATT DAMON: "THESE TYPES OF MOVIES ARE GOING AWAY"</h3>
              <div id="DecemberContainer">
              <div id="DecemberLeft">
                <p className="title">DECEMBER 11,2019</p>
                <p className="title">Mr. Damon, how do you define success?</p>
                <p>It’s the work. It’s the process itself. I have done enough movies now — movies that have failed, movies that have been successful. All we have as the people making it is the love of the doing of it. I am aware of the results because I have to be; it has an impact on my career so I can’t be ignorant of the movies that I am doing. But it’s really about feeling that I did my best work, the best work I could do under the circumstances, feeling that we told the story we wanted to tell in the way we wanted to tell it. That’s really the definition of success.</p> 
           
                <p className="title">So for you it’s about the journey?</p>
                <p>The journey is everything! It’s a cliché, but I have really felt it in my own life, in the 25 or 30 years I’ve been in this… The goal is the process, really enjoying the process. You can’t really predict what is going to happen with movies… I have made movies that I thought were really going to be well received and successful, and they failed miserably. And I have made movies that were very successful that I didn’t see coming.
                </p>
                <p className="readButton"><a href ="#" className="readNow">READ NOW</a></p>    
              </div>
            
          <div id="DecemberRight">
            <p className="title" id="life">LIFE</p>
            <p id="lifequote">"I can't make people happy if I'm not happy myself.That applies to anyone who tries to achieve something in their life: if you are not happy, you can't transfer any happiness to anyone else."
            </p>
            <p className="name">FERRAN ADRIA</p>
            <p>Spain, Chef</p>
          </div>
          </div>
            
        </div>
      );
    }
  }
  export default December;