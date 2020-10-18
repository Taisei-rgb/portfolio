import React, { Component } from "react";
import "./home.css"
import cosmos from '../images/cosmos.JPG'
import purple_flower from '../images/purple_flower.JPG'
import yellow_flower from '../images/yellow_flower.JPG'
import cat1 from '../images/cat1.JPG'

class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home__name">
          <div className="name" ><span className="marker">Philosophy</span></div>
          <div className="home__discription">
          "目の前のことに集中し、それを大切にする"
          <br></br>
          - Focus on what's in front of you -
          <br></br>
          <br></br>
          これは私が最も大切にしている価値観です。
          <br></br>
          人にはそれぞれ欲求があり、目の前のことよりも、他人が所持しているものなど
          <br></br>
          自分にはないものに価値を感じ、それを欲してしまいます。
          <br></br>
          しかし、自分にとって本当に価値があるものは目の前にあり、それは失ってから
          <br></br>
          気づくことの方が圧倒的に多いです。
          <br></br>
          なので、身近なもの、出会いに感謝し日々を歩んでいきたいと思っています。
        </div>
          <div className="name" ><span className="marker">Career</span></div>
          <div className="home__discription">
          Name &nbsp;: 片桐大征
          <br></br>
          Age &nbsp; &nbsp; : 20歳
          <br></br>
          --
          <br></br>
          2019/03 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 福島県立平工業高等学校 - 卒業
          <br></br>
          2019/04 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 東芝ITサービス株式会社 - 入社
          <br></br>
          2020/01 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 東芝ITサービス株式会社 - 退社
          <br></br>
          2020/04 ~ 07 フリーランスの動画編集代行を経験
          <br></br>
          2020/08 ~ 10 &nbsp;テックキャンプでプログラミングの学習をする

        </div>
        <div className="name" ><span className="marker">Skill</span></div>
          <div className="home__discription">
          HTML5 / CSS / Haml / Sass(SCSS) / Ruby / Ruby on rails / JavaScript / React / 
          <br></br>
          Redux / Github / SQL / Firebase / Heroku / AWS(S3, EC2)
          <br></br>
          <br></br>
          ▷その他のスキル
          <br></br>
          Premiere Pro / Photoshop / Illustrator(少し)
          <br></br>
          <br></br>
          ▷IT系の資格
          <br></br>
          ITパスポート / ITILファンデーション / Comptia Network + / Comptia Server +
          <br></br>
          <br></br>
          現在はReact, Reduxなどのモダンなフロントエンドの技術を学習しています。
        </div>
        <div className="name" ><span className="marker">Cover Music</span></div>
          <div className="home__discription">
          個人で弾き語りのMVを制作しています。
          <br></br>
          DAWを用いたレコーディング、MIX、編集などを全て一人で手掛けています。
        </div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/FPM8BzEXbTA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="name" ><span className="marker">Photograpy</span></div>
          <div className="home__discription">
          趣味でカメラをやっています。
          <br></br>
          単焦点レンズでお花や動物などを撮ることが大好きです。
        </div>
          <img width="560" height="350" src={require("../images/cosmos.JPG")} />
          <img width="560" height="350" src={require("../images/purple_flower.JPG")} />
          <img width="560" height="350" src={require("../images/yellow_flower.JPG")} />
          <img width="560" height="350" src={require("../images/cat1.JPG")} />
        </div>
      </div>
    )
  }
}

export default About;