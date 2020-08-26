import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
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
            listCustomers: [],
            note: '',
            date_bookded: '',
            status: '',
            time: ''
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
            // .then(json => console.log(json))
            .then(json => this.setState({ listBooking: json }))
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


    render() {
        return (
                <StyledHeader className='navbar sticky-top'>
                    <h2>Booking List</h2>
                

                {/* Function view list of booked appointment as a table */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Customer name</th>
                            <th>Service name</th>
                            <th>Employee name</th>
                            <th>Date created</th>
                            <th>Time</th>
                            <th>Description</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {this.state.listBooking.filter(p => !p.status).map(p => (
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.customer.name}</td>
                                <td>{p.service.name}</td>
                                <td>{p.employee.name}</td>
                                <td>{p.date_created}</td>
                                <td>{p.time}</td>
                                <td>{p.note}</td>
                                <td>{p.status}</td>
                            </tr>
                        </tbody>
                    ))}
                </table>
                </StyledHeader>
        )
    }
}