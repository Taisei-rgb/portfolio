import React, { Component } from "react";

import "./contact.css"
import github from '../images/icons/github.png'
import facebook from '../images/icons/facebook.jpg'

class Contact extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home__name">
          <div className="name"><span className="marker">Social Media</span></div>
          <div className="about__container">
            <ul className="footer__share">
              <li className="contact__list">
                <a href="https://github.com/Taisei-rgb" target="_blank" rel="nofollow">
                  <img width="50px" src={github} className="sns__img" />
                </a>
              </li>
              <li className="contact__list">
                <a href="https://www.facebook.com/taisei.katagiri.77/" target="_blank" rel="nofollow">
                  <img width="50px" src={facebook} className="sns__img" />
                </a>
              </li>
            </ul>
          </div>
          <div className="name"><span className="marker">Say Hi</span></div>
          <div className="home__discription">
            お仕事関連のご連絡等はこちらからお願いいたします。
              <br></br>
            <br></br>
              Gmail : taisei.contact@gmail.com
            </div>
        </div>
      </div>
    )
  }
}

export default Contact;
