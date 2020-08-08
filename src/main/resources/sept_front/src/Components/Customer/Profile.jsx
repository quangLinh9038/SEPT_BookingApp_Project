import React from 'react';
import BookService from '../Booking/BookService';
const lru = 'https://5f2d05928085690016922b96.mockapi.io/customer'
export default class Profile extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            input: '', cus_name: '', cus_ID: '', cus_address:'',cus_contact:'',cus_email:'',cus_password:''
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

    render() {
        return (
                <div className='row'>
                    <div className='col-4'>
                        <div className='user-card' style={{ width: '18rem' }} >
                            <div class="card" >
                                <img  class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-36-512.png" alt="Card image" />
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
                            <th>Password</th>
                        </tr>
                    </thead>
                    {this.state.listCustomers.map(p =>
                        <tbody>
                            <tr>
                                <td>{p.cus_ID}</td>
                                <td>{p.cus_name}</td>
                                <td>{p.cus_address}</td>
                                <td>{p.cus_contact}</td>
                                <td>{p.cus_email}</td>
                                <td>{p.cus_password}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
                    </div>
                </div>
           
        )
    }
}
