import React, { Component } from "react";
import SimpleSlider from "./slider";
import "./about.css"
import "./common.css"

class About extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="text">
          <div className="text__title">
            <span className="marker">Philosophy</span>
          </div>
          <div className="text__discription">
            "目の前のことに集中し、それを大切にする"
            <br></br>
            - Focus on what's in front of you -
            <br></br>
            <br></br>
            これは私が大切にしている価値観です。
            <br></br>
            人にはそれぞれ欲求があり、目の前のことよりも、他人が所持しているものなど
            <br></br>
            自分にはないものに価値を感じ、それを欲してしまいます。
            <br></br>
            しかし、自分にとって本当に価値があるものは目の前にあり、それは失ってから
            <br></br>
            気づくことの方が多いです。
            <br></br>
            私は身近なものや出会いに感謝し、日々を歩んでいきたいと考えています。
          </div>
          <div className="text__title">
            <span className="marker">Career</span>
          </div>
          <div className="text__discription">
            Name &nbsp;: 片桐大征
            <br></br>
            Age &nbsp; &nbsp; : 21歳
            <br></br>
            --
            <br></br>
            2019/04 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 東芝ITサービス株式会社 - 入社
            <br></br>
            2020/01 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 東芝ITサービス株式会社 - 退社
            <br></br>
            2020/04 ~ 07 &nbsp; フリーランスの動画編集代行を経験
            <br></br>
            2020/08 ~ 10 &nbsp; テックキャンプでプログラミングの学習をする
            <br></br>
            2020/12 ~ &nbsp; &nbsp; &nbsp; 株式会社キッチハイク - 入社
          </div>
          <div className="text__title">
            <span className="marker">Skill</span>
          </div>
          <div className="text__discription">
            ▷プログラミングスキル
            <br></br>
            HTML5(Haml) / CSS(SCSS) / Ruby / Ruby on rails / JavaScript / React / TypeScript / etc...
            <br></br>
            <br></br>
            ▷その他のスキル
            <br></br>
            Figma / Premiere Pro / Photoshop / Logic Pro / etc...
            <br></br>
            <br></br>
            ▷IT系の資格
            <br></br>
            ITパスポート / ITILファンデーション / Comptia Network + / Comptia Server +
            <br></br>
          </div>
          <div className="text__title">
            <span className="marker">Cover Music</span>
          </div>
          <div className="text__discription">
            個人で弾き語りのMVを制作しています。
            <br></br>
            DAWを用いたレコーディング、MIX、編集などを全て一人で手掛けています。
          </div>
          <div className="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FPM8BzEXbTA" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
          <div className="text__title">
            <span className="marker">Photograpy</span>
          </div>
          <div className="text__discription">
            趣味でカメラをやっています。
            <br></br>
            単焦点レンズでお花や動物などを撮ることが大好きです。
          </div>
          <div className="photo">
            <div className="photo__contents">
              <SimpleSlider />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
