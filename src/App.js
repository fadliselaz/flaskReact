import React, { Component } from 'react';
import './App.css';
import FormLogin from './component/form'


class App extends Component {
  render() {
    return (

      <div className="App">
        <header className="App-header">
        <h1>Hello {window.username} !!!</h1>
          <FormLogin />
        </header>
      </div>

    );
  }
}

export default App;
