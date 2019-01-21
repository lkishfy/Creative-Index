import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './pages/Main';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
      );
    }
}

export default App;
