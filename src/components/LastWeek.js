import React, { Component } from 'react';
import '../App.css';



class LastWeek extends Component {
    render() {
        return (
            <div className="LstWeek">
                <div id="leftside">
                    <div id="wally">
                        <p>LAST WEEK'S INTERVIEW</p>
                        <img src={require('../images/WallyPfister.jpg')} />
                        <p>WALLY PFISTER:"I HAD TO SHIFT TO STORYTELLING"</p>
                    <div>
                    <p id="dec">December 4, 2019</p>
                    <p id="audio">LISTEN TO AUDIO EXCERPT</p>
                    </div>
                    
                    <p className="question">Mr. Pfister, in your opinion as an Oscar winning cinematographer, what makes for an iconic film scene?</p>
                    <p className="answer">
                        It's marriage of all the elements: something that works photographically, that tells a story perfectly, that has lighting elements that contribute to the story, the color palette, the metaphorical imagery, the musical cues… If you look back at what we call the iconic images in the Batman movies that I made — one which is a silhouette of Batman standing on top of a building in Gotham city with our helicopter circling around in him at dawn, for instance, or another where he is standing on top of a pile of rubble in a burning building — what's interesting is there’s really very little performance in those scenes, but they are iconic images, and all the information, and mood is within the frame.
                    </p>
                    <p className="question">So it’s really a collaborative effort between every player in the film’s making, more than just a visual impact.</p>
                    <p className="answer">
                        Right, it’s a great collaboration of all these forces: Chris Nolan, in his storytelling best, finding these moments of reflection. It's the performer, in this case Christian Bale, having that moment of reflection, and it's myself and unseen collaborators creating the mood with the images and the music. So those iconic shots that we did, I can't speak for anybody else, but they all fit together in a perfect way, and they come in a perfect place in the narrative, where you need that moment of reflection, amidst all the action.</p>
                    </div>
                    <p><button id="readnow">READ NOW</button></p>
                    <div id="lotus">
                        <p>Flying Lotus</p>
                        <p>"MUSIC WASN'T A REALITY FOR ME"</p>
                    </div>
                    </div>
                
                    <div id="rightside">
                        <div id="leeBjork">
                        <p>EDITOR'S PICKS</p>
                        <img src={require('../images/AngLee.jpg')} />
                        <p>Ang AngLee</p>
                        <p>"NO ONE CAN SEE WHAT IS COMING"</p>
                        </div>
                        <div>
                        <img src={require('../images/Bjork.jpg')} />
                        <p>Bjork</p>
                        <p>"THERE IS A DRAMATIC CHANGE IN THE AIR"</p>
                        </div>
                    
                
                </div>
            </div>
        );
    }
}
export default LastWeek;
