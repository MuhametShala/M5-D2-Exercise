import "./App.css";
import NavigationBar from './components/Head/NavigationBar';
import React, { Component } from "react";
import LatestRelease from "./components/Main/LatestRelease";
import Footer from "./components/Footer/Footer";
import './App.css';




class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <LatestRelease />
        <Footer />
      </div>
    );
  }
}

export default App;
