import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`

const URL = 'https://5f2d05928085690016922b96.mockapi.io/Services'
const url = 'https://5f2d05928085690016922b96.mockapi.io/employee'
const lru = 'https://5f2d05928085690016922b96.mockapi.io/customer'
const LRU = 'https://5f2d05928085690016922b96.mockapi.io/Booking'
export default class BookService extends React.Component {
    constructor() {
        super()
        this.state = {
            listBooking: [],
            name: '',
            ser_ID: '',
            ser_name: '',
            ser_duration: '',
            ser_descriptions: '',
            ser_price: '',
            input: '',
            e_name: '',
            cus_name: '',
            cus_ID: '',
            e_ID: '',

            bookingEmployee: {
                name: ''
            },
            bookingService: {
                name: ''
            },
            bookingCustomer: {
                name: ''
            },

            descriptions: '',
            date_created: '',
            status: ''
        }
    }

    // fetch list of services
    fetchListServices() {
        fetch(URL)
            .then(res => res.json())
            .then(json => this.setState({ listServices: json }))
    }

    // fetch list of employees
    fetchListEmployees() {
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ listEmployees: json }))
    }

    // fetch list of customers
    fetchCustomers() {
        fetch(lru)
            .then(res => res.json())
            .then(json => this.setState({ listCustomers: json }))
    }

    // fetch list of booking appointments
    fetchBooking() {
        fetch(LRU)
            .then(res => res.json())
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
            <div>
                <StyledHeader className='navbar sticky-top'>
                    <h2>Booking List</h2>
                </StyledHeader>

                {/* Function view list of booked appointment as a table */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Customer name</th>
                            <th>Service name</th>
                            <th>Employee name</th>
                            <th>Appointment date</th>
                            <th>Notes</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    {this.state.listBooking.map(p =>
                        <tbody>
                            <tr>
                                <td>{p.bookingCustomer.name}</td>
                                <td>{p.bookingService.name}</td>
                                <td>{p.bookingEmployee.name}</td>
                                <td>{p.date_created}</td>
                                <td>{p.descriptions}</td>
                                <td>{p.status}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
            </div>
        )
    }
}