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
export default class ListService extends React.Component {
    constructor() {
        super()
        this.state = {
            listBooking: [],

            listServices: [],

            listEmployees: [
                {
                    name: ''
                }
            ],

            listCustomers: [
                {
                    name: ''
                }
            ],

            id: '', name: '', description: '', duration: '', price: '', business_bu_id: '', note: '', e_name: '', cus_name: '',

            employee: {
                name: ''
            },
            service: {
                name: ''
            },
            customer: {
                name: ''
            },
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

    // fetch list of booking appointment
    fetchBooking() {
        fetch(urlBooking)
            .then(res => res.json())
            .then(json => this.setState({ listBooking: json }))
    }

    componentDidMount() {
        this.fetchListServices()
        this.fetchListEmployees()
        this.fetchCustomers()
        this.fetchBooking()
    }

    // Take change function
    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    // search function
    search() {
        fetch(urlServices)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.ser_name == this.state.input)
                this.setState({ listServices: data })
            })
    }

    handleAddService() {
        let emp = {
            name: this.state.name
        }
        fetch(urlServices, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchListServices())
    }

    // Function add to booking appointment back-end
    handleAddToAppointment() {
        let emp = {
            employee: {
                name: this.state.e_name
            },
            service: {
                name: this.state.name
            },
            customer: {
                name: this.state.cus_name
            },
            note: this.state.description
        }
        fetch(urlBooking, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchBooking())
    }

    render() {
        return (
            <div>
                <StyledHeader className='navbar sticky-top'>
                    <h2>List of services</h2>

                    {/* Search field */}
                    <ul class='row' style={{ gap: '15px' }}>
                        <li class='nav-item'>
                            <form action="" className='input-group md-form form-sm form-2 pl-0'>
                                <input class='form-control' placeholder='Enter name of service'
                                    name='input' value={this.state.input}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div class='input-group-append'>
                                    <button class='input-group-text' type='button'>
                                        <i class='fa fa-search' aria-hidden='true'
                                            onClick={this.search.bind(this)}
                                        />
                                    </button>
                                </div>
                            </form>
                        </li>

                        {/* Button to book an appointment */}
                        <button type='button' className='btn btn-success' data-toggle='modal' data-target='#formBooking' >
                            <i className='fa fa-address-book' style={{ paddingRight: '10px' }} />
                            Book
                        </button>

                        {/* Button to view list of booked appointment */}
                        <Link to={`/BusinessOwner/BookingList`}>
                            <button type='button' className='btn btn-danger'>
                                <i className='fa fa-list' style={{ paddingRight: '10px' }} />
                            View
                        </button>
                        </Link>
                    </ul>
                </StyledHeader>

                {/* Function view list of services */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Descriptions</th>
                            <th>Price</th>
                        </tr>
                    </thead>

                    {this.state.listServices.map(p =>
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.duration}</td>
                                <td>{p.description}</td>
                                <td>{p.price}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
                {/* Pop-up form to select information */}
                <div class='modal fade' id='formBooking' tabIndex='-1' role='dialog' aria-labelledby='formBookingTitle' aria-hidden='true'>
                    <div class='modal-dialog modal-dialog-centered' role='document'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h4 class='modal-title' id='formBookingLongTitle'><b>Booking form</b></h4>
                                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>x</span>
                                </button>
                            </div>

                            <div class='modal-body'>
                                <Form>
                                    <Form.Row>
                                        {/* Input field for customer */}
                                        <Form.Group as={Col} md='12' controlId='formGridName'>
                                            <Form.Label>Customer name:</Form.Label>
                                            <Form.Control type='text' placeholder='Enter your name'
                                                name='cus_name' value={this.state.cus_name}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>
                                        {/* Select field for services */}
                                        <Form.Group as={Col} md='6' controlId='formGridServices'>
                                            <Form.Label>Select services</Form.Label>
                                            <select class='browser-default custom-select'
                                                name="name" value={this.state.name} id="name"
                                                onChange={this.handleChange.bind(this)}
                                            >
                                                <option selected>Choose your options</option>
                                                {this.state.listServices.map(p =>
                                                    <option value={p.name}>{p.name}</option>
                                                )}
                                            </select>
                                        </Form.Group>
                                        {/* Select field for employees */}
                                        <Form.Group as={Col} md='6' controlId='formGridEmployees'>
                                            <Form.Label>Select employees</Form.Label>
                                            <select class='browser-default custom-select'
                                                name="e_name" value={this.state.e_name} id="e_name"
                                                onChange={this.handleChange.bind(this)}
                                            >
                                                <option selected>Choose your options</option>
                                                {this.state.listEmployees.map(p =>
                                                    <option value={p.name}>{p.name}</option>
                                                )}
                                            </select>
                                        </Form.Group>
                                        {/* Input area for description, note */}
                                        <Form.Group as={Col} controlId='formGridDescription'>
                                            <Form.Label>Notes:</Form.Label>
                                            <Form.Control as='textarea' rows="4"
                                                name='description' value={this.state.description}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>

                                {/* Button add to booking appointment back-end */}
                                <div class='text-right'>
                                    <button type='button' className='btn btn-success btn-md' onClick={this.handleAddToAppointment.bind(this)}>
                                        Add
                                    </button>
                                    <span> </span>

                                    {/* <button type='button' className='btn btn-success btn-md' onClick={this.handleClear.bind(this)}>Clear</button> */}
                                </div>




                                {/* <div class='modal fade' id='confirmGo' tabIndex='-1' role='dialog' aria-labelledby='confirmGoTitle' aria-hidden='true'>
                                    <div class='modal-dialog modal-dialog-centered' role='document'>
                                        <div class='modal-content'>
                                            <div class='modal-header'>
                                                <h5 class='modal-title' id='confirmGoLongTitle'>Confirmation</h5>
                                                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                                    <span aria-hidden='true'>x</span>
                                                </button>
                                            </div>

                                            <div class='modal-body'>
                                                Do you want to view booking page?
                                <div class='text-right'>
                                                    <Link to={`/BusinessOwner/BookingList`}>
                                                        <button type='button' className='btn btn-success btn-md'>Yes</button>
                                                    </Link>
                                                    <span> </span>
                                                    <button type='button' className='btn btn-success btn-md' data-dismiss='modal' aria-label='Close'>No</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}


                            </div>
                        </div>
                    </div>
                </div>

                {/* <Form>
                    <Form.Row>
                        <Form.Group as={Col} md='12' controlId='formGridservice'>
                            <Form.Label>services name:</Form.Label>
                            <Form.Control type='text' placeholder='Enter your name'
                                name='name' value={this.state.name}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>
                </Form>
                <button type='button' className='btn btn-success btn-md' onClick={this.handleAddService.bind(this)}>
                    Add
                </button> */}

            </div>

        )
    }
}