import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import NewInterview from './components/NewInterview';
import December from './components/December';
import MostRead from './components/MostRead';
import WorldGuide from './components/WorldGuide';
import LastWeek from './components/LastWeek';
import Photographers from './components/Photographers';
import LastInterviews from './components/LastInterviews';
import Footer from './components/Footer';

class App extends Component {
    render() {
      return (
        <div className="App"> 
            <Header />
            <NewInterview />
            <December />
            <MostRead />
            <WorldGuide />
            <LastWeek />
            <Photographers />
            <LastInterviews />
            <Footer />
                  
        </div>
      );
    }
  }


export default App;
