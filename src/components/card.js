import React from "react"
import "./card.css"

class Card extends React.Component {
  render() {
    return (
      <a href={this.props.link} className="card__link">
        <div className="card">
          <img
            className="card__img"
            src={this.props.img}
            alt=""
          />
          <div className="card__content">
            <div className="card__title" >
              {this.props.title}
            </div>
            <div className="card__description">
              {this.props.description}
            </div>
          </div>
        </div>
      </a>
    )
  }
}

export default Card;