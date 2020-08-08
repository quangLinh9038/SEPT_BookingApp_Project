import React from 'react'
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
import styled from 'styled-components';

const url = 'https://5f2d05928085690016922b96.mockapi.io/employee';
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`
const StyledCard = styled.div`
border-style: outset;
`
export default class Employee extends React.Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            id: '', name: '', schedule: ''
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
            id: this.state.id, name: this.state.name, schedule: this.state.schedule
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

    handleEditEmployee(id, name, schedule) {
        this.setState({ id: id, name: name, schedule: schedule })
    }

    handleClearEmployee() {
        this.setState({ id: '', name: '', schedule: '' })
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

                                    <Form.Group as={Col} md='4' controlId='formGridSchedule'>
                                        <Form.Label>Schedule:</Form.Label>
                                        <Form.Control type='text' placeholder='Enter schedule'
                                            name='schedule' value={this.state.schedule}
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

                <div>
                        {this.state.lists.map(p =>
                            <table>
                                <thead>
                                    <tr>
                                        <th>id</th>
                                        <th>name</th>
                                        <th>schedule</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.schedule}</td>
                                    </tr>
                                </tbody>
                            </table>
                        )}
                    </div>
            </div>
        )
    }
}