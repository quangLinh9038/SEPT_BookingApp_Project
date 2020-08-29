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

// MODAL
.modal{
    margin-left: 35%
    font-family: 'Bebas Neue', cursive;
    text-align:center
}

.modal .modal-body{
    margin:0px;
    padding:10px
}

.modal-body .confirm-text{
    text-transform:uppercase
    font-size:30px
}

.modal-header .modal-title{
    margin:0;
    padding:0;
    text-transform:uppercase
    padding-left: 10px
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
export default class BookingList extends React.Component {
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

    handleEdit(id, date_booked, time, status, note, admin, customer, service, employee) {
        this.setState({ idCheck: id, date_booked: date_booked, time: time, status: status, note: note, admin: admin, customer: customer, service: service, employee: employee })
    }

    handleApproveBooking() {
        if (this.state.idCheck == '') {
            let emp = {
                id: this.state.idCheck
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
        else {
            let emp = {
                id: this.state.idCheck, date_booked: this.state.date_booked, time: this.state.time, status: this.state.approve, note: this.state.note,
                admin:this.state.admin,customer:this.state.customer,service:this.state.service,employee:this.state.employee
            }
            fetch(urlBooking, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'put',
                body: JSON.stringify(emp)
            })
                .then(res => this.fetchBooking())
        }
    }

    handleDeclineBooking() {
        if (this.state.idCheck == '') {
            let emp = {
                id: this.state.idCheck
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
        else {
            let emp = {
                id: this.state.idCheck, date_booked: this.state.date_booked, time: this.state.time, status: this.state.decline, note: this.state.note,
                admin:this.state.admin,customer:this.state.customer,service:this.state.service,employee:this.state.employee
            }
            fetch(urlBooking, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'put',
                body: JSON.stringify(emp)
            })
                .then(res => this.fetchBooking())
        }
    }

    handleDelete(id) {
        fetch(urlBooking + '/delete/' + id, {
            method: 'delete'
        })
            .then(res => console.log(res))
        // .then(res => this.fetchBooking())
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
                            <th>Booked</th>
                            <th>Time</th>
                            <th>Status</th>
                            <th>Description</th>
                            <th>Admin</th>
                            <th>Customer</th>
                            <th>Service</th>
                            <th>Employee</th>
                            <th>Confirmation</th>
                        </tr>
                    </thead>
                    {/* .filter(status=>status.status == null) */}
                    {this.state.listBooking.filter(status => status.status == null).map(p => (
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.date_booked}</td>
                                <td>{p.time}</td>
                                <td><b>IN PROGRESS</b></td>
                                <td>{p.note}</td>
                                <td>{p.admin?.name}</td>
                                <td>{p.customer?.name}</td>
                                <td>{p.service?.name}</td>
                                <td>{p.employee?.name}</td>
                                <td>
                                    <div className="btn" data-toggle='modal' data-target='#formConfirm'
                                    onClick={this.handleEdit.bind(this, p.id, p.date_booked, p.time, p.status, p.note,p.admin,p.customer,p.service,p.employee)}
                                    >
                                        Pending
                                    </div>                       
                                </td>
                            </tr>
                        </tbody>
                    ))}
                </table>

                {/* Confirm box */}
                <div className='modal fade' id='formConfirm' tabIndex='-1' role='dialog' aria-labelledby='formConfirmTitle' aria-hidden='true'>
                    <div className="modal-dialog modal-dialog-centered" role='document'>
                        <div className="modal-content">


                            <div className="modal-body">
                                <div className="confirm-text">
                                    Do you wish to accept or decline this booking ?
                                </div>

                                <div className="button">
                                    <div className="btn" onClick={this.handleApproveBooking.bind(this)}>
                                        Approve
                                    </div>
<span> </span>
                                    <div className="btn" onClick={this.handleDeclineBooking.bind(this)}>
                                        Decline
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>



                </div>
            </Styled>
        )
    }
}