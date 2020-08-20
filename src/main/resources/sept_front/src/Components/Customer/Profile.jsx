import React from 'react';
import BookService from '../Booking/BookService';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const lru = 'http://localhost:8080/customers'
export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            input: '', name: '', id: '', address: '', contact: '', email: ''
        }
    }

    // fetch Customer api to front-end
    fetchCustomers() {
        fetch(lru)
            .then(res => res.json())
            .then(json => this.setState({ listCustomers: json }))
    }

    componentDidMount() {
        this.fetchCustomers()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleAddCustomer() {
        let emp = {
            name: this.state.name
        }
        fetch(lru, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchCustomers())
    }

    render() {
        return (
            <div className='row'>
                <div className='col-4'>
                    <div className='user-card' style={{ width: '18rem' }} >
                        <div class="card" >
                            <img class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-36-512.png" alt="Card image" />
                        </div>
                    </div>
                </div>

                {/* View list of customers function as a table */}
                <div className='col-8'>
                    <table className='table table-hover text-center'>
                        <thead className='thead-dark'>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Contact</th>
                                <th>Email</th>
                            </tr>
                        </thead>
                        {this.state.listCustomers.map(p =>
                            <tbody>
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.address}</td>
                                    <td>{p.contact}</td>
                                    <td>{p.email}</td>
                                </tr>
                            </tbody>
                        )}
                    </table>

                    {/* <Form>
                        <Form.Row>
                            <Form.Group as={Col} md='12' controlId='formGridcustomer'>
                                <Form.Label>cus name:</Form.Label>
                                <Form.Control type='text' placeholder='Enter your name'
                                    name='name' value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </Form.Group>
                        </Form.Row>
                    </Form>
                    <button type='button' className='btn btn-success btn-md' onClick={this.handleAddCustomer.bind(this)}>
                        Add
                    </button> */}
                </div>
            </div>

        )
    }
}
