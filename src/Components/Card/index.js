import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    return (
      <div key={this.props.idx} className={"card card-" + this.props.idx}>
        <header className="card-header d-flex justify-content-between">
          <div className="align-left blue text-uppercase pr-2">{this.props.header}</div>
          <div className="align-right text-nowrap">{this.props.date}</div>
        </header>
        <body className="card-body">{this.props.body}</body>
      </div>
    );
  }
}

Card.PropTypes = {
  /* The header of the card */
  header: PropTypes.string
  /* The body of the card */
  , body: PropTypes.string
  /* The footer of the card */
  , date: PropTypes.string
  /* The index of the card */
  , idx: PropTypes.number
}

export default Card;
