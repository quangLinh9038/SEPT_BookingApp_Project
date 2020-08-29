import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const Styled = styled.div`
div{
    margin:0;
    padding:0;
    box-sizing:border-box
}
// Nav style
nav{
    display:flex;
    justify-content: space-around;
    align-items:center;
    border-bottom: 5px double grey;
    font-family: 'Bebas Neue', cursive; 
}

.nav-title h1{
    font-weight:bold
    font-size:45px
    // text-transform:uppercase
    letter-spacing:15px;
    text-decoration:none;  
}

// TABLE
table{
    margin: 10px auto 0px 36px
    width:95%
}

@media screen and (max-width:960px){
    .nav-title h1{
        font-size: 15px;
        letter-spacing:10px
        margin: 5px 0
    }

    .nav-list-items-mobile{
        display:flex
    }

    table{
        margin:10px 0px 0px 30px;
    }
}

@media screen and (max-width:900px){
    table{
        font-size:10px
        margin:10px 0px 0px 26px;
    }
}

@media screen and (max-width:700px){
    table{
        font-size:9px
        margin:10px 0px 0px 22px;
    }
}
`

const urlServices = 'http://localhost:8080/services'
const urlEmployees = 'http://localhost:8080/employees'
const urlCustomers = 'http://localhost:8080/customers'
const urlBooking = 'http://localhost:8080/booking'
export default class BookService extends React.Component {
    constructor() {
        super()
        this.state = {
            listBooking: [],
            listEmployees: [],
            listServices: [],
            idCheck: '',
            note: '',
            date_booked: '',
            status: '',
            time: '',
            approve: true,
            decline: false,

            admin: {},
            customer: {},
            service: {},
            employee: {}
        }
    }

    // fetch list of services
    fetchListServices() {
        fetch(urlServices)
            .then(res => res.json())
            .then(json => this.setState({ listServices: json }))
    }

    // fetch list of employees
    fetchListEmployees() {
        fetch(urlEmployees)
            .then(res => res.json())
            .then(json => this.setState({ listEmployees: json }))
    }

    // fetch list of customers
    fetchCustomers() {
        fetch(urlCustomers)
            .then(res => res.json())
            .then(json => this.setState({ listCustomers: json }))
    }

    // fetch list of booking appointments
    fetchBooking() {
        fetch(urlBooking)
            .then(res => res.json())
            .then(json => this.setState({ listBooking: json }))
        // .then(json => console.log(json))
    }

    componentDidMount() {
        this.fetchListServices()
        this.fetchListEmployees()
        this.fetchCustomers()
        this.fetchBooking()
    }


    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    statusReturn(s) {
        if (s == null) {
            return ('IN PROGRESS')
        } else if (s == true) {
            return ('APPROVED')
        } else {
            return ("DECLINED")
        }
    }

    render() {
        return (
            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>Booking History</h1>
                    </div>
                </nav>


                {/* Function view list of booked appointment as a table */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Booked date</th>
                            <th>Arrival date</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Employee</th>  
                        </tr>
                    </thead>
                   
                    {this.state.listBooking.map(p => (
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.date_booked}</td>
                                <td>{p.time}</td>
                                <td>
                                   <b>{this.statusReturn(p.status)}</b> 
                                </td>
                                <td>{p.note}</td>
                                <td>{p.customer?.name}</td>
                                <td>{p.service?.name}</td>
                                <td>{p.employee?.name}</td>
                            </tr>
                        </tbody>
                    ))}    
                </table>
            </Styled>
        )
    }
}