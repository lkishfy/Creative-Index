import React, { Component } from 'react';
import './App.css';
import Clock from "./clock";
import Welcome from "./Header";
import "./Button.css"
import axios from 'axios';
const API_KEY_AIRTABLE =`${process.env.REACT_APP_API_KEY_AIRTABLE}`;


class App extends Component {

  constructor () {
    super()
    this.state = {
      title: []
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){

    axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
    .then(response => this.setState({JobData: response.data.records[0].fields["Job Description (Brief)"]})
  )

  axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
  .then(response => this.setState({JobData: response.data.records[1].fields["Job Description (Brief)"]})
)

axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
.then(response => this.setState({JobData: response.data.records[2].fields["Job Description (Brief)"]})
)

axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
.then(response => this.setState({JobData: response.data.records[3].fields["Job Description (Brief)"]})
)

axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
.then(response => this.setState({JobData: response.data.records[4].fields["Job Description (Brief)"]})
)

  axios.get('https://api.airtable.com/v0/app5E9WGdMiCYpHtF/Job%20Leads?api_key=' + API_KEY_AIRTABLE)
  .then(response => {
    const JobArray = response.data.records;
    console.log(JobArray);
    var component = this;

    for(var i in JobArray) {
      component.setState({
        title: response.data.records[i].fields["Job Description (Brief)"]
      });
    }


      var count = 0;
      for (var k in JobArray) {
        if (JobArray.hasOwnProperty(k)) {
          ++count;
        }
      }
      //total number of entries
      alert("Found " + count + " properties specific to foo");

    }
  )

}

render() {

  return (
    <div className="App">
    <Welcome name="Sara" />
    <Clock />

    <div className = 'button_container'>
    <button className = 'Button' onClick={this.handleClick}>Press Here</button>
    </div>


    <div className="grid-container">
    <div className="item1">{this.state.JobData}</div>
    <div className="item2">{this.state.title}</div>
    <div className="item3">{this.state.title}</div>
    <div className="item4">{this.state.title}</div>
    <div className="item5">{this.state.title}</div>
    <div className="item6">{this.state.title}</div>
    <div className="item7">{this.state.title}</div>
    <div className="item8">{this.state.title}</div>
    <div className="item9">{this.state.title}</div>
    <div className="item10">{this.state.title}</div>
    <div className="item11">{this.state.title}</div>
    <div className="item12">{this.state.title}</div>
    <div className="item13">{this.state.title}</div>
    <div className="item14">{this.state.title}</div>
    </div>
    </div>
  );
}
}

export default App;
