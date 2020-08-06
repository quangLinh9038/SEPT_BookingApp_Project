import React, { Profiler } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Service } from './Service';
import Sidebar from './Components/NavBar/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './Components/NavBar/NavigationBar';
import MediaCart from './Components/Home/HomepageBS';
import Profile from './Components/Customer/Profile'
import styled from 'styled-components';

import ListService from './Components/Booking/ListService';

const GridWrapper = styled.div`
margin-left:5em
margin-right:5em
margin-top:2em`

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar/>
        <GridWrapper>
        <Switch>
          <Route exact path="/" component={MediaCart} />
          <Route path="/Customer/Profile" component={Profile} />
          <Route path="/Booking/ListService" component={ListService}/>
        </Switch>
        </GridWrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;
