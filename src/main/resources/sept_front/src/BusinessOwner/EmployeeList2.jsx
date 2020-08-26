import React from 'react'
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
}

// Title style
.nav-title h1{
    font-weight:bold
    font-size:45px
    // text-transform:uppercase
    letter-spacing:15px;
    text-decoration:none;
}

// Nav items style
.nav-links{
    display:flex;
    // background-color:red;
    justify-content: space-around;
    width:15%;
}

li{
    list-style:none;
}

// Input style

input{
    padding-left:10px
}

.search .form-control{
    position:absolute
    max-width:170px
    top:68px
    right:30px
}

// Button style
form .btn{
    position:absolute;
    top:76px
    right:38px
}

.no2 .btn{
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

.no2 .btn i{
    padding:0
    margin:0
    letter-spacing:10px
}

.nav-links-mobile{
    display:none;
    position:absolute;
    top:15px;
    right:15px;
}

.nav-links-mobile i{
    color:#9FFFCB
    font-size:15px
}

.lists-button {
    display:flex
    gap:5px
    justify-content:center
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


// MODAL
.modal{
    margin-left: 35%
    font-family: 'Bebas Neue', cursive;
}

.modal .modal-body form{
    margin:0px;
    padding:0px;

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

// TABLE
table{
    margin: 10px auto 0px
    width:95%
}

// Mobile view
@media screen and (max-width:960px){
    .nav-links{
        display:none
    }

    .nav-title h1{
        font-size: 15px;
        letter-spacing:10px
        margin: 5px 0
    }

    .nav-links-mobile{
        display:block
    }

    .modal{
        margin-left:17%
    }
    
    .modal-body .form-label{
        padding: 0 5px
    }

    .modal .modal-body .form-group{
        padding: 5px
    }

}

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
            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>Employee List</h1>
                    </div>

                    <ul class='nav-links'>
                        <li class='nav-item no1'>
                            {/* Search field */}
                            <form class='search'>
                                <input class='form-control' placeholder='Enter name of employee'
                                    name='input' value={this.state.input}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div className='btn' >
                                    <i class='fa fa-search' aria-hidden='true'
                                        onClick={this.search.bind(this)}
                                    />
                                </div>
                            </form>
                        </li>

                        <li className='nav-item no2'>
                            {/* Button add new employee */}
                            <div className='btn' data-toggle='modal' data-target='#formEmployee' >
                                <i className='fa fa-address-book' />
                                New
                            </div>
                        </li>
                    </ul>

                    {/* Add button for mobile */}
                    <div className="nav-links-mobile">
                        <div className='btn' data-toggle='modal' data-target='#formEmployee' >
                            <i className='fa fa-address-book' />
                        </div>
                    </div>
                </nav>

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
                                <h4 class='modal-title' id='formEmployeeLongTitle'>Manage employee</h4>
                            </div>

                            <div class='modal-body'>
                                <Form>
                                    {/* <Form.Row> */}
                                        <Form.Group as={Col} md='11' controlId='formGridName'>
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control type='text' placeholder='Enter name'
                                                name='name' value={this.state.name}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>

                                        <Form.Group as={Col} md='11' controlId='formGridSchedule'>
                                            <Form.Label>Schedule:</Form.Label>
                                            <Form.Control type='text' placeholder='Enter schedule'
                                                name='schedule' value={this.state.schedule}
                                                onChange={this.handleChange.bind(this)}
                                            />
                                        </Form.Group>
                                    {/* </Form.Row> */}
                                </Form>
                                
                                    <ul className='lists-button'>
                                        <li>
                                            <div className='btn' onClick={this.handleAddEmployee.bind(this)}>Add</div>
                                        </li>

                                        <li>
                                            <div className='btn' onClick={this.handleClearEmployee.bind(this)}>Clear</div>
                                        </li>
                                    </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Styled>

        )
    }
}