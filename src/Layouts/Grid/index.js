import React, { Component } from 'react';
import './index.css';
import PropTypes from 'prop-types';

class Grid extends Component {
  render() {
    return (
      <div className="App">
        <div className="grid-container">
            {
              Objects.map((object, idx) => (
                <div key={idx} className="grid-item">
                  {object}
                </div>
              ))
            }
        </div>
      </div>
    );
  }
}

Grid.PropTypes = {
  /* Array of Cards */
  Objects: PropTypes.array
}

export default Grid;
