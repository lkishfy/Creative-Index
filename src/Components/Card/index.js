import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    return (
      <div key={this.props.idx} className={"card card-" + this.props.idx}>
        <header className="card-header">{this.props.header}</header>
        <body className="card-body">{this.props.body}</body>
        <footer className="card-footer">{this.props.footer}</footer>
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
  , footer: PropTypes.string
  /* The index of the card */
  , idx: PropTypes.number
}

export default Card;
