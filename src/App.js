import React, { Component } from 'react';
import './App.css';
const API_KEY_AIRTABLE = ;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/appZk2NwqtIC4xmSZ/Categorize?api_key=' + API_KEY_AIRTABLE)
      .then(response => response.json())
      .then(data => this.setState({ records: data.records }));
  }

  render() {
    const { records } = this.state;
    console.log(records);
    return (
      <div className="App">
        <div className="grid-container">
            {
              records.map((content, idx) => (
                <div key={idx} className={"grid-item item" + idx}>
                  <header className="grid-item-header">{content.fields['Title']}</header>
                  <body className="grid-item-body">{content.fields['Content']}</body>
                  <footer className="grid-item-footer">{content.fields['Date']}</footer>
                </div>
              ))
            }
        </div>
      </div>
      );
    }
}

export default App;
