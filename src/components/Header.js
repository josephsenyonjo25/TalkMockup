import React, {Component} from 'react';
import '../App.css';


class Header extends Component {
    render() {
      return (
        <div className="Header">
          <h2>The Talks</h2> 
            <a href="#">Interview Directory</a>
            <a href="#">World Guide</a>
            <a href ="#"><i className="fa fa-facebook-f"></i></a>
            <a href ="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
            <a href ="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
        </div>
      );
    }
  }
  export default Header;