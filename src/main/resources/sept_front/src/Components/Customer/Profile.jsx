import React from 'react';
import BookService from '../Booking/BookService';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
import styled from 'styled-components'
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

// TABLE
table{
    margin-top: 10px
    margin-left:80px
    width:93%
}

`




const lru = 'http://localhost:8080/customers'
export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            input: '', name: '', id: '', address: '', contact: '', email: '',username:'',password:''
        }
    }

    // fetch Customer api to front-end
    fetchCustomers(id) {
        fetch(lru + '/' + id)
            .then(res => res.json())
            .then(json => this.setState({
                id: json.id, name: json.name, address:json.address, contact:json.contact,email:json.email,username:json.username,password:json.password
            }))
    }

    componentDidMount() {
        this.fetchCustomers()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleEdit(id,name,address,contact,email,username,password){
        this.setState({id:id,name:name,address:address,contact:contact,email:email,username:username,password:password})
    }

    handleEditProfile() {
        if (this.state.id == '') {
            let emp = {
                id: this.state.id
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
        else {
            let emp = {
                id: this.state.id, name: this.state.name, address: this.state.address, contact: this.state.contact, email: this.state.email,
                username:this.state.username,password:this.state.password
            }
            fetch(lru, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'put',
                body: JSON.stringify(emp)
            })
                .then(res => this.fetchCustomers())
        }
    }

    render() {
        return (
            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>Customer List</h1>
                    </div>
                </nav>
                {/* View list of customers function as a table */}

                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Function</th>
                        </tr>
                    </thead>
                    {/* {this.state.listCustomers.map(p =>
                            <tbody>
                                <tr>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.address}</td>
                                    <td>{p.contact}</td>
                                    <td>{p.email}</td>
                                </tr>
                            </tbody>
                        )} */}

                    <tbody>
                        <tr>
                            <td>
                            {this.props.match.params.id}
                            </td>
                            <td>
                            {this.props.match.params.name}
                            </td>
                            <td>
                            {this.props.match.params.address}
                            </td>
                            <td>
                            {this.props.match.params.contact}
                            </td>
                            <td>
                            {this.props.match.params.email}
                            </td>
                            <td>
                                <div className="btn" data-toggle='modal' data-target='#formEdit' onClick={this.handleEdit.bind(this,this.props.match.params.id,this.props.match.params.name,this.props.match.params.address
                                ,this.props.match.params.contact,this.props.match.params.email,this.props.match.params.username,this.props.match.params.password
                                )}>
                                    Edit
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Edit box */}
                <div className='modal fade' id='formEdit' tabIndex='-1' role='dialog' aria-labelledby='formEditTitle' aria-hidden='true'>
                    <div className="modal-dialog modal-dialog-centered" role='document'>
                        <div className="modal-content">
                            <div className="modal-body">
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
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type='input' placeholder='Enter your contact'
                                                name='contact' value={this.state.contact}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md='11' controlId='formGridEmail'>
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type='input' placeholder='Enter your email'
                                                name='email' value={this.state.email}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>
                                    </Form.Row>
                                </Form>

                                <div className="button">
                                    <div className="btn" onClick={this.handleEditProfile.bind(this)}>
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
