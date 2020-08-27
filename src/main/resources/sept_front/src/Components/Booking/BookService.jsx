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

// TABLE
table{
    margin: 10px auto 0px 36px
    width:95%
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
            listServices:[],
            note: '',
            date_created: '',
            status: '',
            time: '',
            approve:true,
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

    handleApprove(id) {
        let emp = {
            status: this.state.approve
        }
        fetch(urlBooking + '/' + id, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'put',
            body: JSON.stringify(emp)
        })
        .then(res=>console.log(res))
            // .then(res => this.fetchBooking())
    }

    handleDelete(){
        fetch(urlBooking + '/delete',{
            method:'delete'
        })
        .then(res=>console.log(res))
        // .then(res=>this.fetchBooking())
    }


    render() {
        return (
                <Styled>
                    <nav>
                        <div className="nav-title">
                            <h1>Booking List</h1>
                        </div>
                    </nav>
                

                {/* Function view list of booked appointment as a table */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Service name</th>
                            <th>Employee name</th>
                            <th>Date created</th>
                            <th>Time</th>
                            <th>Description</th>
                            {/* <th>Status</th> */}
                            <th>Confirmation</th>
                        </tr>
                    </thead>
                    {this.state.listBooking.filter(status=>status.status == false).map(p => (
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.service?.name}</td>
                                <td>{p.employee?.name}</td>
                                <td>{p.date_created}</td>
                                <td>{p.time}</td>
                                <td>{p.note}</td>
                                {/* <td>{p.status}</td> */}
                                <th>
                                    <div className="btn" onClick={this.handleApprove.bind(this,p.id)}>
                                        Approve
                                    </div>
                                    /
                                    <div className="btn" onClick={this.handleDelete.bind(this)}>
                                        Decline
                                    </div>
                                </th>
                            </tr>
                        </tbody>
                    ))}
                </table>
                </Styled>
        )
    }
}