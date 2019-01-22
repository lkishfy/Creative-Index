import React, { Component } from 'react';
import Card from '../Components/Card/';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchIdeas, sortIdeas } from '../redux/ActionCreators';
import _ from 'lodash';
import moment from 'moment';
import './index.css';

const mapStateToProps = state => {
  return {
    ideas: state.ideas
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchIdeas: () => {dispatch(fetchIdeas())}
  , sortIdeas: (sortBy) => {dispatch(sortIdeas(sortBy))}
});

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sortBy: 'desc'
    }
  }

  componentDidMount() {
    this.props.fetchIdeas();
  }

  onSort = () => {
    if (this.state.sortBy === 'desc') {
      this.setState({ sortBy: 'asc' });
    } else {
      this.setState({ sortBy: 'desc' });
    }
    console.log(this.state.sortBy);
    this.props.sortIdeas(this.state.sortBy);
  }

  render() {
    return (
      <div>
        <div className="d-flex justify-content-end pt-4 pr-4">
          <Button color="primary" onClick={this.onSort}>
           {
             (this.state.sortBy === 'desc') ? (
               'Sort Up'
             ) : (
               'Sort Down'
             )
           }
          </Button>
        </div>
        <div className="grid-container">
          {
            _.map(this.props.ideas.ideas.records, (idea, idx) => (
              <Card
                header={idea.fields['Title'] == 'No Title' ? null : idea.fields['Title']}
                body={idea.fields['Content']}
                date={moment(idea.fields['Date']).format('MMMM Do, YYYY')}
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
