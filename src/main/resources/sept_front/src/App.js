import React, { Profiler } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ViewBookingList from './BusinessOwner/BookingList.jsx';
import Homepage from './Components/Home/HomepageBS';
import Profile from './Components/Customer/Profile'
import styled from 'styled-components';
import ListService from './Components/Booking/ListService';
import ViewEmployeeList2 from './BusinessOwner/EmployeeList2';
import BookService from './Components/Booking/BookService';
import BookingList from './BusinessOwner/BookingList';
import TopNav from './Components/NavBar/TopNav';
import NavCustomer from './Components/NavBar/NavCustomer'
import LoginByCustomer from './Authentication/LoginByCustomer';
import LoginByRole from './Authentication/LoginByRole';
import NavUser from './Components/NavBar/NavUser'
import HomepageCustomer from './Components/Home/HomepageCustomer';
import LoginByAdmin from './Authentication/LoginByAdmin';
import OwnerPage from './Employee/Owner'
import NavAdmin from './Components/NavBar/NavAdmin'
import Register from './Authentication/Register';

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
      // margin:5px 10px 0px 25px
      margin:0px;
      padding:0px;
      box-sizing:border-box
    }
  }
`;


function App() {
  return (
    <React.Fragment>
      <Router>
        {/* <NavigationBar /> */}
        {/* <TopNav/> */}
        {/* <Sidebar /> */}
        <GridWrapper>

          {/* User view */}
          <Route exact path={`/`} render={() =>
            <div><NavUser/><Homepage /></div>
          } />

          <Route exact path={`/Authentication/LoginByRole`} render={() =>
            <div><LoginByRole /></div>
          } />

          {/* Customer */}
          <Route exact path={`/Authentication/LoginByCustomer`} render={() =>
            <div><LoginByCustomer /></div>
          } />

          <Route exact path={`/Components/Home/HomepageCustomer`} render={() =>
            <div><NavCustomer/><HomepageCustomer /></div>
          } />

          <Route exact path={`/Customer/Profile/:id/:name/:address/:contact/:email/:username/:password`} render={(props) =>
            <div><NavCustomer/><Profile {...props} /></div>
          } />

          <Route exact path={`/Components/Home/Booking/ListService`} render={() =>
            <div><NavCustomer/><ListService /></div>
          } />

          <Route exact path={`/Components/Booking/BookService`} render={() =>
            <div><NavCustomer/><BookService /></div>
          } />

          {/* Admin */}
          <Route exact path={`/Authentication/LoginByAdmin`} render={() =>
            <div><LoginByAdmin /></div>
          } />

          <Route exact path={`/BusinessOwner/BookingList`} render={() =>
            <div><ViewBookingList /></div>
          } />

          <Route exact path={`/BusinessOwner/EmployeeList2`} render={() =>
            <div><NavAdmin/><ViewEmployeeList2 /></div>
          } />

          <Route exact path={`/Employee/Owner/:id/:name`} render={(props) =>
            <div><NavAdmin/><OwnerPage {...props} /></div>
          } />

          <Route exact path={`/BusinessOwner/BookingList`} render={()=>
          <div><BookingList/> </div>
          }/>

          {/* Resgister */}

          <Route exact path={`/Authentication/Register`} render={()=>
          <div>
            <Register/>
          </div>
          }/>

          

        </GridWrapper>
      </Router>
    </React.Fragment>
  );
}

export default App;

