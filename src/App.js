import React, { Component } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Home, About, Search, Learn, Game, Words } from './pages';
import Menu from './component/Menu';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Menu/>
            <Route exact path="/" component={Home}/>
            <Switch>
                <Route path="/search" component={Search}/>
                <Route path="/learn" component={Learn}/>                
                <Route path="/game" component={Game}/>
                <Route path="/words" component={Words}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    );
  }
}

export default App;
