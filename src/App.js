import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'
import {Provider, connect} from 'react-redux'
import {createStore} from 'redux'
import counter from './reducers/counter'
import CounterContainer from './containers/CounterContainer'

const store = createStore(counter)

function App() {
  return (
      <Provider store={store}>
        <CounterContainer/>
      </Provider>
  );
}

export default App;
