import React from 'react'
import { Form, Col, CardColumns, Card,Row } from 'react-bootstrap'
import styled from 'styled-components';

const url = '';
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`
const StyledCard= styled.div`
border-style: outset;
`
export default class Employee extends React.Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            name: '', id: '', business: '', age: '', gender: '',position:'',phone:'',email:''
        }
    }

    fetchListEmployee() {
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ lists: json }))
    }

    componentDidMount() {
        this.fetchListEmployee()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    handleAddEmployee() {
        let emp = {
            id: this.state.id, name: this.state.name, business: this.state.business, age: this.state.age, gender: this.state.gender,
            position:this.state.position,phone:this.state.phone,email:this.state.email
        }
        fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchListEmployee())
    }

    handleEditEmployee(name, id, business, age, gender,position,phone,email) {
        this.setState({ name: name, id: id, business: business, age: age, gender: gender,position:position,phone:phone,email:email })
    }

    handleClearEmployee() {
        this.setState({ id: '', name: '', age: '', business: '', gender: '',position:'',email:'' })
    }

    // handleDeleteEmployeeById(id){
    //     if (confirm('Would you like to delete?')){
    //         fetch(url+'/'+id,{
    //             method:'delete'
    //         })
    //         .then(res=>this.fetchListEmployee())
    //     }
    // }


    render() {
        return (
            <div>
               
                    <StyledHeader>
                        <h2>Manage employee</h2>
                    </StyledHeader>

                    <StyledCard>
                    <Card>
                    <Card.Body>
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col} md='4' controlId='formGridId'>
                                    <Form.Label>ID:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter ID'
                                        name='id' value={this.state.id}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridName'>
                                    <Form.Label>Name:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter name'
                                        name='name' value={this.state.name}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridAge'>
                                    <Form.Label>Age:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter age'
                                        name='age' value={this.state.age}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridGender'>
                                    <Form.Label>Gender:</Form.Label>
                                    <select className="browser-default custom-select"
                                        name='gender' value={this.state.gender}
                                        onChange={this.handleChange.bind(this)}
                                    >
                                        <option selected>Choose your option</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Don't want to say">Don't want to say</option>
                                    </select>
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridBusiness'>
                                    <Form.Label>Business:</Form.Label>
                                    <Form.Control type='text' placeholder='Ex: Enter business'
                                        name='business' value={this.state.business}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridPosition'>
                                    <Form.Label>Position:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter position'
                                        name='position' value={this.state.position}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridPhone'>
                                    <Form.Label>Phone:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter phone number'
                                        name='phone' value={this.state.phone}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} md='4' controlId='formGridEmail'>
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type='text' placeholder='Enter email'
                                        name='email' value={this.state.email}
                                        onChange={this.handleChange.bind(this)}
                                    />
                                </Form.Group>
                            </Form.Row>
                        </Form>
                        <div className='text-center'>
                            
                            <button type='button' className='btn btn-success btn-md' onClick={this.handleAddEmployee.bind(this)}>Add</button>
                            <span> </span>
                            <button type='button' className='btn btn-success btn-md' onClick={this.handleClearEmployee.bind(this)}>Clear</button>
    
                        </div>
                    </Card.Body>
                </Card>
                </StyledCard>
            </div>
        )
    }
}