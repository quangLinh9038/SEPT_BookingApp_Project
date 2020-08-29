import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'

const Styled = styled.div`
.modal-body{
    display:grid
}
// MODAL
.modal{
    margin-left: 35%
    font-family: 'Bebas Neue', cursive;
    
}

.modal .modal-body{
    margin:0px;
    padding:0px
    justify-content:center
}

.modal-header .modal-title{
    margin:0;
    padding:0;
    padding-left:10px
}
`
const urlCustomers = 'http://localhost:8080/customers'
export default class LoginByCustomer extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            username: '', password: ''
        }
    }

    fetchCustomers() {
        fetch(urlCustomers)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.username == this.state.username && d.password == this.state.password)
                // console.log(data)
                this.setState({ listCustomers: data })
            })
    }

    componentDidMount() {
        this.fetchCustomers()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    setData() {
        sessionStorage.setItem('mydata', JSON.stringify(this.state.listCustomers))
    }

    getData() {
        let data = sessionStorage.getItem('mydata')
        data = JSON.parse(data)
        console.log(data)
    }

    render() {
        return (
            <Styled>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md='6' controlId='formGridUserName'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' placeholder='Username'
                                name='username' value={this.state.username}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md='6' controlId='formGridPassword'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password' placeholder='Password'
                                name='password' value={this.state.password}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <div className="footer">
                        <button type='button' className='login' onClick={this.fetchCustomers.bind(this)} data-toggle='modal' data-target='#formLoginCus'>Login</button>
                        <button onClick={this.getData()}></button>
                        <button onClick={this.setData()}></button>
                        {this.state.listCustomers.map(p =>
                            <div>
                                {/* login box */}
                                <div className='modal fade' id='formLoginCus' tabIndex='-1' role='dialog' aria-labelledby='formEditTitle' aria-hidden='true'>
                                    <div className="modal-dialog modal-dialog-centered" role='document'>
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                Login Successfully! Choose your destination

                                                <Link to={`/Customer/Profile/${p.id}/${p.name}/${p.address}/${p.contact}/${p.email}/${p.username}/${p.password}`}>
                                                    Profile page
                                                </Link>

                                                <Link to={`/Components/Home/HomepageCustomer`}>
                                                    Home page
                                                </Link>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                </Form>
            </Styled>
        )
    }
}