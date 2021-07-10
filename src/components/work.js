import React, { Component } from "react";
import "./home.css"
import Card from "./card"
import kitchHike from "../images/cards/kitchhike.jpg"

class Work extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home__name">
          <div className="name"><span className="marker">Projects that I've worked on</span></div>
          <div className="home__discription">
            私が開発しているサービスをご紹介いたします。
          </div>
          <div className="cards">
            <Card img={kitchHike} title="キッチハイク" description="デザインエンジニアとして、フルスタックに開発をおこなっております。「成果」を意識して日々業務に励んでおります。" link="https://kitchhike.com/" />
          </div>
        </div>
      </div>
    )
  }
}

export default Work;
