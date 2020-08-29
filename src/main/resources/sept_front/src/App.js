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
import ViewEmployeeList2 from './BusinessOwner/EmployeeList2';
import BookService from './Components/Booking/BookService';
import BookingList from './BusinessOwner/BookingList';
import TopNav from './Components/NavBar/TopNav';
import Login from './Authentication/Login';

const GridWrapper = styled.div`
  // font-family: 'Allura', cursive;
  // grid-gap: 10px;
  // margin-top: 1em;
  // margin-left: 4.5em;
  // margin-right: 3em;
  // grid-template-columns: repeat(12, 1fr);
  // grid-auto-rows: minmax(25px, auto);

  // Mobile view
  *{
    margin: 0px;
    padding:0px;
    box-sizing:border-box;
  }

  // Desktop view
  @media screen and (min-width:960px){
    *{
      margin:5px 10px 0px 25px
      padding:0px;
    }
  }
`;


function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <NavigationBar /> */}
        <TopNav/>
        {/* <Sidebar /> */}
        <GridWrapper>

          <Route exact path={`/`} render={() =>
            <div><MediaCart /></div>
          } />

          <Route exact path={`/Customer/Profile/:id/:name`} render={(props) =>
            <div><Profile {...props} /></div>
          } />

          <Route exact path={`/Booking/ListService`} render={() =>
            <div><ListService /></div>
          } />

          <Route exact path={`/BusinessOwner/BookingList`} render={() =>
            <div><ViewBookingList /></div>
          } />

          <Route exact path={`/BusinessOwner/EmployeeList2`} render={() =>
            <div><ViewEmployeeList2 /></div>
          } />

          <Route exact path={`/BusinessOwner/EmployeeMana`} render={() =>
            <div><Employee /></div>
          } />

          <Route exact path={`/Employee/Owner`} render={() =>
            <div><OwnerPage /></div>
          } />

          <Route exact path={`/Components/Booking/BookService`} render={() =>
            <div><BookService /></div>
          } />

          <Route exact path={`/BusinessOwner/BookingList`} render={()=>
          <div><BookingList/> </div>
          }/>

          <Route exact path={`/Authentication/Login`} render={() =>
            <div><Login /></div>
          } />


        </GridWrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;

