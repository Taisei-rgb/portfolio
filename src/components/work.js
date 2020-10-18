import React, { Component } from "react";
import "./home.css"
import Card from "./card"
import relist from "../images/cards/relist.jpg"
import todost from "../images/cards/todost.jpg"
import portfolio from "../images/cards/portfolio.jpg"
import ecapp from "../images/cards/ecapp.jpg"

class Work extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home__name">
          <div className="name" ><span className="marker">Projects that I've worked on</span></div>
          <div className="home__discription">
            私が3ヶ月間、テックキャンプでプログラミングを学習し、カリキュラム終了後に
            <br></br>
            励んできた個人開発アプリを紹介します。
          </div>
          <div className="cards">
            <Card img={relist} title="Relist" description="SNSやコロナウイルスの影響でたまるストレスから、それを解消することで幸せになれる人が増えるのではないかと考え作成したエクスプレッシブライティングアプリです。Rails / haml / Sass などを使用しています。" link="https://relist-29671.herokuapp.com/" />
            <Card img={todost} title="Todost" description="Relistと並行して使用することで効果を発揮します。不安な感情が頭をよぎった時に、一時的にそれを管理しておく箱を用意しておくことで目の前のやるべき事に集中することができるのではないかと考え作成しました。Reactを使用。" link="https://todost-29671.herokuapp.com/" />
            <Card img={portfolio} title="Portfolio" description="React を用いてこちらのポートフォリオサイトを作成しました。SPAに対応しています。ヘッダーのナビゲーションバーからそれぞれのページに遷移することができます。今回は４つのテーマで作成しました。 "link="https://t-k-portfolio.herokuapp.com/ " />
            <Card img={ecapp} title="Fashion App (開発途中)" description="React / Redux / Firebase を用いてEC-APPを作成しています。ログイン/ログアウト機能、商品編集ページを実装しました。※リンク先からはログイン/トップページのみの表示となっております。" link="https://ec-app-bac4e.web.app/" />
          </div>
        </div>
      </div>
    )
  }
}

export default Work;