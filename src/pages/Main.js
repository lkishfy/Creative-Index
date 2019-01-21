import React, { Component } from 'react';
import Card from '../Components/Card/';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchIdeas } from '../redux/ActionCreators';
import _ from 'lodash';
import './index.css';

const mapStateToProps = state => {
  return {
    ideas: state.ideas
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchIdeas: () => {dispatch(fetchIdeas())}
});

class Main extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchIdeas();
  }

  onSort = () => {
    console.log("Sorted");
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.onSort}>Sort</Button>
        <div className="grid-container">
          {
            _.map(this.props.ideas.ideas.records, (idea, idx) => (
              <Card
                header={idea.fields['Title']}
                body={idea.fields['Content']}
                footer={idea.fields['Date']}
                idx={idx}
                key={idx}
              />
            ))
          }
        </div>
      </div>
      );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
