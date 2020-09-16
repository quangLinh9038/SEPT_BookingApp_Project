import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const Styled = styled.div`
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
`
const urlCustomer = 'http://localhost:8080/customers'
export default class Register extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            input: '', name: '', id: '', address: '', contact: '', email: '', username:'',password:'',
        }
    }

    fetchCustomers() {
        fetch(urlCustomer)
            .then(res => res.json())
            .then(json => this.setState({ listCustomers: json }))
    }

    componentDidMount(){
        this.fetchCustomers()
    }

    handleAddCustomer(){
        let emp = {
            id: this.state.id, name: this.state.name, address: this.state.address,contact:this.state.contact, email:this.state.email,
            username:this.state.username,password:this.state.password
        }
        fetch(urlCustomer, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchCustomers())
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    render(){
        return(
            <Styled>
                <div className="register-form">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} md='11' controlId='formGridName'>
                                <Form.Label>Name:</Form.Label>
                                <Form.Control type='input' placeholder='Enter your name'
                                    name='name' value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md='11' controlId='formGridAddress'>
                                <Form.Label>Address:</Form.Label>
                                <Form.Control type='input' placeholder='Enter your address'
                                    name='address' value={this.state.address}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md='11' controlId='formGridContact'>
                                <Form.Label>Contact:</Form.Label>
                                <Form.Control type='input' placeholder='Enter your contact'
                                    name='contact' value={this.state.contact}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md='11' controlId='formGridEmail'>
                                <Form.Label>Email:</Form.Label>
                                <Form.Control type='input' placeholder='Enter your email'
                                    name='email' value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md='11' controlId='formGridUsername'>
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type='input' placeholder='Enter your username'
                                    name='username' value={this.state.username}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                            <Form.Group as={Col} md='11' controlId='formGridPassword'>
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type='password' placeholder='Enter your password'
                                    name='password' value={this.state.password}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                        </Form.Row>

                        <div className="btn" onClick={this.handleAddCustomer.bind(this)}>Register</div>
                    </Form>
                </div>
            </Styled>
        )
    }
}