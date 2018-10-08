import React, { Component } from 'react';
import './resources/styles.css';


import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlight from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/Location';
// import Footer from './components/header_footer/Footer';

class App extends Component {
  render() {
    return (
      <div className='App' style={{ height:'1500px', background:'lightblue'}}>
        <Header/>
        <Featured/>
        <VunueNfo/>
        <Highlight/>
        <Pricing/>
        <Location/>
      </div>
    );
  }
}

export default App;
