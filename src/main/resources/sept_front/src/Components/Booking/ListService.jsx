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

.nav-list-items{
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:0px;
    padding:0px;
}

.nav-list-items-mobile{
    display:none;
    justify-content:space-around;
    align-items:center;
    margin:0px;
    padding:0px;
    letter-spacing: 20px
    position:absolute;
    top:15px;
    right:15px;
}

.nav-list-items-mobile i{
    color:#9FFFCB
    font-size:15px
}


li{
    list-style:none;
}

.nav-item .btn{
    display:block;
    border:2px solid #fb2274;
    :hover{
        background-color:red
        color:white
    }
    width:110px;
    height:35px;
    line-height:35px;
    word-spacing:0;
    text-decoration:none;
    font-size:20px;
    margin: 0 auto;
    border-radius: 25px
}

.nav-item .btn i{
    padding:0
    margin:0
    letter-spacing:10px
}

.nav-item .btn a{
    text-decoration:none
}

input{
    padding-left:10px
}

// MODAL
.modal{
    margin-left: 35%
    font-family: 'Bebas Neue', cursive;
}

.modal .modal-body form{
    margin:0px;
    padding:0px
}

.modal-header .modal-title{
    margin:0;
    padding:0;
    padding-left:10px
}

.form-label{
    padding: 0 5px
    font-weight:bold;
}

// TABLE
table{
    margin: 10px auto 0px
    width:95%
}


// BUTTON
.lists-button {
    display:flex
    gap:5px
    justify-content:center
}

.lists-button .btn{
    background-color: #00BFFF
    :hover{
        background-color:red
        color:white
    }
    width:50px;
    height:30px;
    line-height:30px;
    word-spacing:0;
    text-decoration:none;
    font-size:15px;
    margin: 3px auto 5px;
    border-radius: 10px
}


@media screen and (max-width:960px){
    .modal{
        margin-left:17%
    }
    
    .modal-body .form-label{
        padding: 0 5px
    }

    .modal .modal-body .form-group{
        padding: 5px
    }

    .nav-title h1{
        font-size: 15px;
        letter-spacing:10px
        margin: 5px 0
    }

    .nav-list-items{
        display: none
    }

    .nav-list-items-mobile{
        display:flex
    }
}



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

            listServices: [{
                name:''
            }],

            listEmployees: [
                {
                    name: ''
                }
            ],

            listCustomers: [
                {
                    name:''
                }
            ],

            id: '', name: '', description: '', duration: '', price: '', business_bu_id: '', note: '', 
            e_name: '', cus_name: '', time: '', ser_name:'', cus_id:'',

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
            // .then(json=>console.log(json))
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
        this.fetchBooking()
        let data = sessionStorage.getItem('mydata')
        data = JSON.parse(data)
        // console.log(data)
        this.setState({listCustomers:data})
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
                name: this.state.ser_name
            },
            customer: {
                id: this.state.cus_id
            },
            note: this.state.description,
            time: this.state.time
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

            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>List of services</h1>
                    </div>

                    <ul className='nav-list-items-mobile'>
                        <li>
                            <div className="btn" data-toggle='modal' data-target='#formBooking'>
                                <i className='fa fa-address-book' />
                            </div>
                        </li>

                        <li>
                            <Link to={`/Components/Booking/BookService`} style={{ textDecoration: 'none' }}>
                                <div className="btn">
                                    <i className='fa fa-list' />
                                </div>
                            </Link>
                        </li>
                    </ul>
                    <ul className='nav-list-items'>
                        <li className='nav-item no1'>
                            <div className="btn" data-toggle='modal' data-target='#formBooking'>
                                <i className='fa fa-address-book' />
                                    Book
                            </div>
                        </li>
                        <li className='nav-item no2'>
                            <Link to={`/Components/Booking/BookService`} style={{ textDecoration: 'none' }}>
                                <div className="btn">
                                    <i className='fa fa-list' />
                                    View
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>

                {/* Function view list of services */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Descriptions</th>
                            <th>Price (VND)</th>
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

                                {/* <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>x</span>
                                </button> */}

                            </div>

                            <div class='modal-body'>
                                <Form>
                                    <Form.Row>
                                    {/* Input field for customer */}
                                    <Form.Group as={Col} md='11' controlId='formGridID'>
                                        <Form.Label>Customer name</Form.Label>
                                        <select class='browser-default custom-select'
                                            name="cus_id" value={this.state.cus_id} 
                                            onChange={this.handleChange.bind(this)}
                                        >
                                            <option selected>Choose your options</option>
                                            {this.state.listCustomers.map(p =>
                                                <option value={p.id}>{p.name}</option>
                                            )}
                                        </select>
                                    </Form.Group>

                                    {/* <Form.Group as={Col} md='11' controlId='formGridID'>
                                        <Form.Label>ID:</Form.Label>
                                        <Form.Control type='input' placeholder='Enter your date'
                                            name='cus_id' value={this.state.cus_id}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </Form.Group> */}

                                    {/* Select field for book date */}
                                    <Form.Group as={Col} md='11' controlId='formGridTime'>
                                        <Form.Label for='time'>Time:</Form.Label>
                                        <Form.Control type='date' placeholder='Enter your date'
                                            name='time' value={this.state.time}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </Form.Group>

                                    {/* Select field for services */}
                                    <Form.Group as={Col} md='11' controlId='formGridServices'>
                                        <Form.Label>Select services</Form.Label>
                                        <select class='browser-default custom-select'
                                            name="ser_name" value={this.state.ser_name} 
                                            onChange={this.handleChange.bind(this)}
                                        >
                                            <option selected>Choose your options</option>
                                            {this.state.listServices.map(p =>
                                                <option value={p.name}>{p.name}</option>
                                            )}
                                        </select>
                                    </Form.Group>
                                    {/* Select field for employees */}
                                    <Form.Group as={Col} md='11' controlId='formGridEmployees'>
                                        <Form.Label>Select employees</Form.Label>
                                        <select class='browser-default custom-select'
                                            name="e_name" value={this.state.e_name} 
                                            onChange={this.handleChange.bind(this)}
                                        >
                                            <option selected>Choose your options</option>
                                            {this.state.listEmployees.map(p =>
                                                <option value={p.name}>{p.name}</option>
                                            )}
                                        </select>
                                    </Form.Group>
                                    {/* Input area for description, note */}
                                    <Form.Group as={Col} md='11' controlId='formGridDescription'>
                                        <Form.Label>Notes:</Form.Label>
                                        <Form.Control as='textarea' rows="4"
                                            name='description' value={this.state.description}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </Form.Group>
                                    </Form.Row>
                                </Form>

                                {/* Button add to booking appointment back-end */}
                                <ul class='lists-button'>
                                    <li>
                                        <div type='button' class='btn' onClick={this.handleAddToAppointment.bind(this)}>
                                            Add
                                        </div>
                                    </li>

                                    {/* <li>
                                        <button type='button' className='btn btn-success btn-md' onClick={this.handleClear.bind(this)}>Clear</button>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            
            </Styled>


        )
    }
}