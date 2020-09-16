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

.nav-list-items{
    display:flex;
    justify-content:space-around;
    align-items:center;
    margin:0px;
    padding:0px;
    gap:10px
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
    padding-left:5px
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

select{
    padding-left:5px
}

// TABLE
table{
    width:93.5%
    margin:10px 10px 0 80px
}


// BUTTON
.lists-button {
    display:flex
    gap:5px
    justify-content:center
    margin: 10px auto
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

.filter-by-business{
    display:flex
    gap:3px
}

.filter-by-business .custom-select{
    width:150px
}

.filterclear{
    display:flex
    gap:10px
}

.filterclear .btn{
    font-size:13px
    width:35px
    height:39px
    border-radius: 5px
}

.button {
    --background: #1E2235;
    --color: #F6F8FF;
    --shadow: #{rgba(#00093D, .24)};
    --cannon-dark: #A6ACCD;
    --cannon-light: #F6F8FF;
    --cannon-shadow: #{rgba(#0D0F18, .9)};
    --confetti-1: #892AB8;
    --confetti-2: #EA4C89;
    --confetti-3: #FFFF04;
    --confetti-4: #4AF2FD;
    --z-before: -6;
    display: block;
    outline: none;
    cursor: pointer;
    position: relative;
    border: 0;
    background: none;
    padding: 9px 22px 9px 16px;
    line-height: 26px;
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    color: var(--color);
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
    transition: transform var(--transform-duration, .4s);
    will-change: transform;
    transform-style: preserve-3d;
    transform: perspective(440px) rotateX(calc(var(--rx, 0) * 1deg)) rotateY(calc(var(--ry, 0) * 1deg)) translateZ(0);
    &:hover {
        --transform-duration: .16s;
    }
    &.success {
        --confetti-scale: 0;
        --stroke-dashoffset: 15;
    }
    &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 12px;
        transform: translateZ(calc(var(--z-before) * 1px));
        background: var(--background);
        box-shadow: 0 4px 8px var(--shadow);
    }
    .icon,
    span {
        display: inline-block;
        vertical-align: top;
        position: relative;
        z-index: 1;
    }
    .icon {
        --z: 2px;
        width: 24px;
        height: 14px;
        margin: 8px 16px 0 0;
        transform: translate(calc(var(--icon-x, 0) * 1px), calc(var(--icon-y, 0) * 1px)) translateZ(2px);
        .confetti {
            position: absolute;
            left: 17px;
            bottom: 9px;
            svg {
                width: 18px;
                height: 16px;
                display: block;
                stroke-width: 1px;
                fill: none;
                stroke-linejoin: round;
                stroke-linecap: round;
                * {
                    transition: stroke-dashoffset .2s;
                    stroke-dasharray: 15 20;
                    stroke-dashoffset: var(--stroke-dashoffset, 0);
                    stroke: var(--stroke-all, var(--stroke, var(--confetti-2)));
                    &:nth-child(2) {
                        --stroke: var(--confetti-3);
                    }
                    &:nth-child(3) {
                        --stroke: var(--confetti-1);
                    }
                }
            }
            .emitter {
                position: absolute;
                left: 4px;
                bottom: 4px;
                pointer-events: none;
                div {
                    width: 4px;
                    height: 4px;
                    margin: -2px 0 0 -2px;
                    border-radius: 1px;
                    position: absolute;
                    left: 0;
                    top: 0;
                    transform-style: preserve-3d;
                    background: var(--confetti-all, var(--b, none));
                }
            }
            i {
                width: 4px;
                height: 4px;
                display: block;
                transform: scale(var(--confetti-scale, .5));
                position: absolute;
                transition: transform .25s;
                left: var(--left, -1px);
                top: var(--top, 3px);
                border-radius: var(--border-radius, 1px);
                background: var(--confetti-background, var(--confetti-3));
                &:nth-child(2) {
                    --left: 9px;
                    --top: -1px;
                    --border-radius: 2px;
                    --confetti-background: var(--confetti-4);
                }
                &:nth-child(3) {
                    --left: 5px;
                    --top: 3px;
                    --confetti-background: var(--confetti-1);
                }
                &:nth-child(4) {
                    --left: 10px;
                    --top: 14px;
                    --confetti-background: var(--confetti-2);
                }
                &:nth-child(5) {
                    --left: 9px;
                    --top: 7px;
                    --confetti-background: var(--confetti-4);
                }
                &:nth-child(6) {
                    --left: 6px;
                    --top: 8px;
                    --border-radius: 2px;
                    --confetti-background: var(--confetti-2);
                }
            }
        }
        .cannon {
            position: relative;
            width: 24px;
            height: 14px;
            transform: translate(0, 3px) rotate(-45deg);
            filter: drop-shadow(-2px 2px 2px var(--cannon-shadow));
            &:before,
            &:after {
                content: '';
                display: block;
                height: 14px;
            }
            &:before {
                background: linear-gradient(var(--cannon-dark), var(--cannon-light) 50%, var(--cannon-dark));
                width: 100%;
                -webkit-clip-path: polygon(25px -1px, 0 52%, 25px 15px);
                clip-path: polygon(25px -1px, 0 52%, 25px 15px);
            }
            &:after {
                width: 6px;
                position: absolute;
                right: -3px;
                top: 0;
                border-radius: 50%;
                box-shadow: inset 0 0 0 .5px var(--cannon-light);
                background: linear-gradient(90deg, var(--cannon-dark), var(--cannon-light));
            }
        }
    }
    &.white {
        --background: #fff;
        --color: #1E2235;
        --border: grey;
        --shadow: none;
        --cannon-dark: #103FC5;
        --cannon-light: #275EFE;
        --cannon-shadow: #{rgba(#00093D, .2)};
        &:before {
            box-shadow: inset 0 0 0 1px var(--border);
        }
    }
    &.grey {
        --background: #404660;
        --cannon-shadow: #{rgba(#0D0F18, .2)};
        --cannon-dark: #D1D6EE;
        --cannon-light: #FFFFFF;
    }
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

    nav{
        margin:0
    }

    table{
        width:100%
        margin:10px 0
    }
}



`

const urlServices = 'http://localhost:8080/services'
const urlEmployees = 'http://localhost:8080/employees'
const urlCustomers = 'http://localhost:8080/customers'
const urlBooking = 'http://localhost:8080/booking'
const urlBusiness = 'http://localhost:8080/business'
export default class ListService extends React.Component {
    constructor() {
        super()
        this.state = {
            listBooking: [],

            listBusinesses: [],

            listServices: [{
                name: ''
            }],

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

            id: '', name: '', description: '', duration: '', price: '', business_bu_id: '', note: '',
            e_name: '', cus_name: '', time: '', ser_name: '', cus_id: '',

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

    fetchFilterService() {
        fetch(urlServices)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.business?.id == this.state.business_bu_id)
                this.setState({ listServices: data })
            })
    }

    fetchListBusinesses() {
        fetch(urlBusiness)
            .then(res => res.json())
            // .then(json=>console.log(json))
            .then(json => this.setState({ listBusinesses: json }))
    }

    componentDidMount() {
        this.fetchListServices()
        this.fetchListEmployees()
        this.fetchBooking()
        this.fetchListBusinesses()
        let data = sessionStorage.getItem('mydata')
        data = JSON.parse(data)
        // console.log(data)
        this.setState({ listCustomers: data })
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
                        <li className='nav-item no1'
                            data-toggle="popover" data-trigger="hover" title='FUNCTION' data-content="Booking form" data-placement="bottom"
                        >
                            <div className="btn" data-toggle='modal' data-target='#formBooking'>
                                <i className='fa fa-address-book' />
                                    Book
                            </div>
                        </li>
                        <li className='nav-item no2'
                            data-toggle="popover" data-trigger="hover" title='FUNCTION' data-content="Booking list" data-placement="bottom"
                        >
                            <Link to={`/Components/Booking/BookService`} style={{ textDecoration: 'none' }}>
                                <div className="btn">
                                    <i className='fa fa-list' />
                                    View
                                </div>
                            </Link>
                        </li>

                        <li className='nav-item no3'>
                            <div className="filter-by-business">
                                <select name="business_bu_id" id="businessId"
                                    className='browser-default custom-select'
                                    value={this.state.business_bu_id}
                                    onChange={this.handleChange.bind(this)}
                                >
                                    <option selected>Filter by business</option>

                                    {this.state.listBusinesses.map(p =>
                                        <option value={p.id}>{p.name}</option>
                                    )}
                                </select>

                                <div className="filterclear">
                                    <button class='btn' onClick={this.fetchFilterService.bind(this)}>
                                        Filter
                                </button>
                                    <button class='btn' onClick={this.fetchListServices.bind(this)}>
                                        Clear
                                </button>
                                </div>



                            </div>
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
                                        <Form.Group as={Col} md='12' controlId='formGridID'>
                                            <Form.Label>Customer name</Form.Label>
                                            <select class='browser-default custom-select'
                                                name="cus_id" value={this.state.cus_id}
                                                onChange={this.handleChange.bind(this)}
                                                required
                                            >
                                                <option selected>Your name below here</option>
                                                {this.state.listCustomers.map(p =>
                                                    <option value={p.id}>{p.name}</option>
                                                )}
                                            </select>
                                        </Form.Group>

                                        {/* Select field for book date */}
                                        <Form.Group as={Col} md='12' controlId='formGridTime'>
                                            <Form.Label>Time:</Form.Label>
                                            <Form.Control type='date' placeholder='Enter your date'
                                                name='time' value={this.state.time}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>

                                        {/* Select field for services */}
                                        <Form.Group as={Col} md='12' controlId='formGridServices'>
                                            <Form.Label>Select services</Form.Label>
                                            <select class='browser-default custom-select'
                                                name="ser_name" value={this.state.ser_name}
                                                onChange={this.handleChange.bind(this)}
                                                required
                                            >
                                                <option selected>Choose your options</option>
                                                {this.state.listServices.map(p =>
                                                    <option value={p.name}>{p.name}</option>
                                                )}
                                            </select>
                                        </Form.Group>
                                        {/* Select field for employees */}
                                        <Form.Group as={Col} md='12' controlId='formGridEmployees'>
                                            <Form.Label>Select employees</Form.Label>
                                            <select class='browser-default custom-select'
                                                name="e_name" value={this.state.e_name}
                                                onChange={this.handleChange.bind(this)}
                                                required
                                            >
                                                <option selected>Choose your options</option>
                                                {this.state.listEmployees.map(p =>
                                                    <option value={p.name}>{p.name}</option>
                                                )}
                                            </select>
                                        </Form.Group>
                                        {/* Input area for description, note */}
                                        <Form.Group as={Col} md='12' controlId='formGridDescription'>
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
                                        {/* <div type='button' class='btn' onClick={this.handleAddToAppointment.bind(this)}>
                                            Add
                                        </div> */}

                                        <button type='btn' class="button white" onClick={this.handleAddToAppointment.bind(this)}>
                                            <div class="icon">
                                                <div class="cannon"></div>
                                                <div class="confetti">
                                                    <svg viewBox="0 0 18 16">
                                                        <polyline points="1 10 4 7 4 5 6 1" />
                                                        <path d="M4,13 C5.33333333,9 7,7 9,7 C11,7 12.3340042,6 13.0020125,4" />
                                                        <path d="M6,15 C7.83362334,13.6666667 9.83362334,12.6666667 12,12 C14.1663767,11.3333333 15.8330433,9.66666667 17,7" />
                                                    </svg>
                                                    <i></i><i></i><i></i><i></i><i></i><i></i>
                                                    <div class="emitter"></div>
                                                </div>
                                            </div>
                                            <span>Confirm</span>
                                        </button>
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