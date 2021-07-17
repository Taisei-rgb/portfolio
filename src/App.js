import React, { Component } from 'react';
import Main from "./components/main";
import { Link } from "react-router-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <div className="header">
          <div className="header__nav">
            <span className="nav__title">
              TAISEI KATAGIRI
            </span>
            <div className="nav__list">
              <Link to="/" className="nav__link">HOME</Link>
              <Link to="/about" className="nav__link">ABOUT</Link>
              <Link to="/work" className="nav__link">WORK</Link>
              <Link to="/contact" className="nav__link">CONTACT</Link>
            </div>
          </div>
        </div>
        <div className="page-content">
          <Main />
        </div>
      </>
    );
  }
}
export default App;
