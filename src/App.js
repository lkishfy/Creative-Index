import React, { Component } from 'react';
import Card from './Components/Card/';
import './App.css';
const API_KEY_AIRTABLE = "";

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
                <Card header={content.fields['Title']} body={content.fields['Content']} footer={content.fields['Date']} idx={idx} />
              ))
            }
        </div>
      </div>
      );
    }
}

export default App;
