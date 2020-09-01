import React, {Component} from 'react';
import '../App.css';


class Footer extends Component {
    render() {
      return (
        <div className="Footer">
            <div id = "Socialmedia">
             <p>Facebook</p>
             <p>Twitter</p>
             <p>Instagram</p>
            </div>
            <div id="copyright">
            <p>&copy; 2019 The Talks</p>
            </div>
        </div>
      );
    }
  }
  export default Footer;