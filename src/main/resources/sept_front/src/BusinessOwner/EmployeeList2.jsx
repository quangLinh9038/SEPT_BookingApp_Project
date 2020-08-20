import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`
const url = 'http://localhost:8080/employees'
export default class ViewEmployeeList2 extends React.Component {
    constructor() {
        super()
        this.state = {
            listsEmployees: [],
            id: '', name: '', schedule: '', input: '', admin_admin_id: '', business_bu_id: ''
        }
    }

    // fetch list of employees
    fetchListEmployee() {
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ listsEmployees: json }))
    }

    componentDidMount() {
        this.fetchListEmployee()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    // Function add employee
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

    // Function edit employee
    handleEditEmployee(id, name, schedule) {
        this.setState({ id: id, name: name, schedule: schedule })
    }

    // Function clear employee
    handleClearEmployee() {
        this.setState({ ID: '', name: '', schedule: '' })
    }

    // handleDeleteEmployeeById(id){
    //     if (confirm('Would you like to delete?')){
    //         fetch(url+'/'+id,{
    //             method:'delete'
    //         })
    //         .then(res=>this.fetchListEmployee())
    //     }
    // }

    // Function search by name of employee
    search() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.name == this.state.input)
                this.setState({ listsEmployees: data })
            })
    }

    render() {
        return (
            <div >
                <StyledHeader className='navbar sticky-top'>
                    <h2>Employee List</h2>
                    <ul class='row' style={{ gap: '15px' }}>
                        <li class='nav-item'>

                            {/* Search field */}
                            <form action="" className='input-group md-form form-sm form-2 pl-0'>
                                <input class='form-control' placeholder='Enter name of employee'
                                    name='input' value={this.state.input}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div class='input-group-append'>
                                    <button class='input-group-text' type='button'>
                                        <i class='fa fa-search' aria-hidden='true'
                                            onClick={this.search.bind(this)}
                                        />
                                    </button>
                                </div>
                            </form>
                        </li>
                        {/* Button add new employee */}
                        <button type='button' className='btn btn-success' data-toggle='modal' data-target='#formEmployee' >
                            <i className='fa fa-address-book' style={{ paddingRight: '10px' }} />
                            New
                        </button>

                    </ul>
                </StyledHeader>

                {/* View employee as table */}
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>SCHEDULE</th>
                        </tr>
                    </thead>
                    {this.state.listsEmployees.map(p =>
                        <tbody>
                            <tr>
                                <td>{p.id}</td>
                                <td>{p.name}</td>
                                <td>{p.schedule}</td>
                            </tr>
                        </tbody>
                    )}
                </table>

                {/* Pop-up form to add new employee */}
                <div class='modal fade' id='formEmployee' tabIndex='-1' role='dialog' aria-labelledby='formEmployeeTitle' aria-hidden='true'>
                    <div class='modal-dialog modal-dialog-centered' role='document'>
                        <div class='modal-content'>
                            <div class='modal-header'>
                                <h5 class='modal-title' id='formEmployeeLongTitle'>Manage employee</h5>
                                <button type='button' class='close' data-dismiss='modal' aria-label='Close'>
                                    <span aria-hidden='true'>x</span>
                                </button>
                            </div>

                            <div class='modal-body'>
                                <Form>
                                    <Form.Row>
                                        <Form.Group as={Col} md='6' controlId='formGridName'>
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type='text' placeholder='Enter name'
                                                name='name' value={this.state.name}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md='6' controlId='formGridSchedule'>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}