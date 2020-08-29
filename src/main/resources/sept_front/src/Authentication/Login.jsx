import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'

const Styled = styled.div`

`
const urlCustomers = 'http://localhost:8080/customers'
export default class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            username: '', password: ''
        }
    }

    // fetchCustomers(){
    //     fetch(urlCustomers)
    //     .then(res => res.json())
    //         .then(json => this.setState({ listCustomers: json }))
    // }

    fetchCustomers() {
        fetch(urlCustomers)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.username == this.state.username && d.password == this.state.password)
                // console.log(data)
                this.setState({ listCustomers: data })
            })
    }

    componentDidMount(){
        this.fetchCustomers()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
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
                            <Form.Control type='text' placeholder='Password'
                                name='password' value={this.state.password}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>
                    
                    <div className="footet">
                    <button type='button' className='login' onClick={this.fetchCustomers.bind(this)}>login</button>
                    {this.state.listCustomers.map(p=>
                        <Link to={`/Customer/Profile/${p.id}/${p.name}`}>
                            Profile page
                        </Link>
                    )}
                    </div>
                    
                </Form>
            </Styled>
        )
    }
}