import React, { Profiler } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

import { Service } from './Service';
import Sidebar from './Components/NavBar/SideBar';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewBookingList from './BusinessOwner/BookingList.jsx';
import ViewEmployeeList from './BusinessOwner/EmployeeList.jsx';
import Employee from './BusinessOwner/EmployeeMana.jsx';
import OwnerPage from './Employee/Owner.jsx';
import { NavigationBar } from './Components/NavBar/NavigationBar';
import MediaCart from './Components/Home/HomepageBS';
import Profile from './Components/Customer/Profile'
import styled from 'styled-components';
import ListService from './Components/Booking/ListService';

const GridWrapper = styled.div`
font-family: Georgia, serif;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`; 


function App() {
  return (
    <React.Fragment>
      <Router>
        <NavigationBar />
        <Sidebar/>
        <GridWrapper>
        
        <Route exact path={`/`} render={() =>
            <div><MediaCart /></div>
          } />

<Route exact path={`/Customer/Profile`} render={() =>
            <div><Profile /></div>
          } />

<Route exact path={`/Booking/ListService`} render={() =>
            <div><ListService /></div>
          } />



          <Route exact path={`/BusinessOwner/BookingList`} render={() =>
            <div><ViewBookingList /></div>
          } />

          <Route exact path={`/BusinessOwner/EmployeeList`} render={() =>
            <div><ViewEmployeeList /></div>
          } />

          <Route exact path={`/BusinessOwner/EmployeeMana`} render={() =>
            <div><Employee /></div>
          } />

          <Route exact path={`/Employee/Owner`} render={() =>
            <div><OwnerPage /></div>
          } />
          
          
          

         
        </GridWrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;

