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
const urlAdmins = 'http://localhost:8080/admin'
export default class LoginByAdmin extends React.Component {
    constructor() {
        super()
        this.state = {
            listAdmins: [],
            usernameAdmin: '', passwordAdmin: ''
        }
    }

    fetchAdmins() {
        fetch(urlAdmins)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.username == this.state.usernameAdmin && d.password == this.state.passwordAdmin)
                // console.log(data)
                this.setState({ listAdmins: data })
            })
    }

    componentDidMount() {
        this.fetchAdmins()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    // setData(){
    //     sessionStorage.setItem('mydata1',JSON.stringify(this.state.listAdmins))
    // }

    // getData(){
    //     let data = sessionStorage.getItem('mydata1')
    //     data = JSON.parse(data)
    //     console.log(data)
    // }

    render() {
        return (
            <Styled>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} md='6' controlId='formGridUserName'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' placeholder='Username'
                                name='usernameAdmin' value={this.state.usernameAdmin}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md='6' controlId='formGridPassword'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password' placeholder='Password'
                                name='passwordAdmin' value={this.state.passwordAdmin}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>

                    <div className="footer">
                        <button type='button' className='login' onClick={this.fetchAdmins.bind(this)} data-toggle='modal' data-target='#formLoginAdm'>Login</button>
                        {/* <button onClick={this.getData()}></button>
                    <button onClick={this.setData()}></button> */}
                        {this.state.listAdmins.map(p =>
                            <div>
                                {/* login box */}
                                <div className='modal fade' id='formLoginAdm' tabIndex='-1' role='dialog' aria-labelledby='formEditTitle' aria-hidden='true'>
                                    <div className="modal-dialog modal-dialog-centered" role='document'>
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                Login Successfully! Choose your destination
                                                 <Link to={`/Employee/Owner/${p.id}/${p.name}`}>
                                                    Admin page
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