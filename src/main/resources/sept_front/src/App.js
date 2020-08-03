import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Service } from './Service';
import Sidebar from './Components/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={Service} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
