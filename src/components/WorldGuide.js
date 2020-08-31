import React, {Component} from 'react';
import '../App.css';


class WorldGuide extends Component {
    render() {
      return (
        <div id="WorldGuide">
             <p className="title">WORLD GUIDE</p>
            <div id="worldguide">
             <p id="explore">EXPLORE THE WORLD AND GET INSPIRED</p>
             <p><a href="#" id="worldGuideButton">World Guide</a></p>
         
            </div>
        </div>
      );
    }
  }
  export default WorldGuide;