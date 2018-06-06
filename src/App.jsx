import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from './footer/Footer';
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Contacts from './contacts/Contacts';
import Pagination from './pagination/Pagination';
import PhotoGrid from './photo-grid/PhotoGrid';
import AboutMe from './about-me/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Sidebar/>
      
      <div class="w3-overlay w3-hide-large w3-animate-opacity" onclick="w3_close()" style={{"cursor":"pointer"}} title="close side menu" id="myOverlay"></div>
      
      <div class="w3-main" style={{"margin-left":"300px"}}>
      
      <Header/>
        <PhotoGrid/>
      <Pagination/>
      
        <div class="w3-row-padding w3-padding-16" id="about">
          <div class="w3-col m6">
            <img src="/w3images/avatar_g.jpg" alt="Me" style={{"width":"100%"}}/>
          </div>
          <div class="w3-col m6">
            <img src="/w3images/me2.jpg" alt="Me" style={{"width":"100%"}}/>
          </div>
        </div>
      
        <AboutMe/>
        
        <Contacts/>
      
       <Footer/>
        <div class="w3-black w3-center w3-padding-24">Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-opacity">w3.css</a></div>
      </div>
      </div>
    );
  }
}

export default App;
