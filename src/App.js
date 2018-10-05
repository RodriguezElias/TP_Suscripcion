import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './modules/Home';
import Register from './modules/Register';
import Complete from './modules/Complete';



class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register" component={Register} />
            <Route path="/complete" component={Complete} />
          </Switch>
        </Router>
                

      </div>
    );
  }
}

export default App;
