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
    margin-left:80px
    margin-right:20px
}

.nav-title h1{
    font-weight:bold
    font-size:45px
    // text-transform:uppercase
    letter-spacing:15px;
    text-decoration:none;  
}

.btn{
    border:2px solid #fb2274;
    :hover{
        background-color:red
        color:white
    }
    width:80px;
    height:35px;
    line-height:35px;
    word-spacing:0;
    text-decoration:none;
    font-size:15px;
    margin: 0 auto;
    border-radius: 25px
    font-family: 'Libre Caslon Display', serif;
    font-weight:bold
}

.button{
    text-align:center
    margin:5px auto
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

// TABLE
table{
    width:93.5%
    margin:10px 10px 0 80px
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

    nav{
        margin:0
    }

    table{
        width:100%
        margin:10px 0
        font-size:10px
    }

    .btn{
        width:40px
        height:30px
        font-size:15px
        
        border-radius:3px
    }
}

// @media screen and (max-width:900px){
//     table{
//         font-size:10px
//         margin:10px 0px 0px 26px;
//     }
// }

// @media screen and (max-width:700px){
//     table{
//         font-size:9px
//         margin:10px 0px 0px 22px;
//     }
// }
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
        this.fetchBooking()
        
    }

    handleEdit(id, date_booked, time, status, note, admin, customer, service, employee) {
        this.setState({ idCheck: id, date_booked: date_booked, time: time, status: status, note: note, admin: admin, customer: customer, service: service, employee: employee })
    }

    handleEditBooking() {
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
                id: this.state.idCheck, date_booked: this.state.date_booked, time: this.state.time, status: this.state.status, note: this.state.note,
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
                            <th>Function</th>
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
                                <td>
                                    {p.customer?.name}
                                </td>
                                <td>{p.service?.name}</td>
                                <td>{p.employee?.name}</td>
                                <td>
                                    <div className="btn" data-toggle='modal' data-target='#formEdit'
                                    onClick={this.handleEdit.bind(this, p.id, p.date_booked, p.time, p.status, p.note,p.admin,p.customer,p.service,p.employee)}
                                    >
                                        Edit
                                    </div>                       
                                </td>
                            </tr>
                        </tbody>
                    ))}    
                </table>

                {/* Edit box */}
                <div className='modal fade' id='formEdit' tabIndex='-1' role='dialog' aria-labelledby='formEditTitle' aria-hidden='true'>
                    <div className="modal-dialog modal-dialog-centered" role='document'>
                        <div className="modal-content">
                            <div className="modal-body">
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md='12' controlId='formGridNote'>
                                        <Form.Label>Notes:</Form.Label>
                                        <Form.Control as='textarea' rows="4"
                                            name='note' value={this.state.note}
                                            onChange={this.handleChange.bind(this)}
                                        />
                                    </Form.Group>
                                    </Form.Row>
                                </Form>

                                <div className="button">
                                    <div className="btn" onClick={this.handleEditBooking.bind(this)}>
                                        Save
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