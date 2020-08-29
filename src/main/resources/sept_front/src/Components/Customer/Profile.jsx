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
}

// TABLE
table{
    margin: 10px auto 0px
    width:95%
}

`




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
    fetchCustomers(id) {
        fetch(lru + '/' + id)
            .then(res => res.json())
            .then(json => this.setState({
                id: json.id, name: json.name
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
                        </tr>
                    </tbody>
                </table>

            </Styled>

        )
    }
}
