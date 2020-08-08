import React from 'react';
import Homepage from './Homepage.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`
const urlBusiness = 'https://5f2e587264699b0016028b82.mockapi.io/Business'
export default class MediaCart extends React.Component {
    constructor() {
        super()
        this.state = {
            listBusinesses: [],
            b_ID: '', b_name: '', b_contact: '', b_descriptions: '', b_schedule: ''
        }
    }
    // fetch Business api to front-end
    fetchListBusinesses() {
        fetch(urlBusiness)
            .then(res => res.json())
            .then(json => this.setState({ listBusinesses: json }))
    }

    componentDidMount() {
        this.fetchListBusinesses()
    }

    render() {
        return (
            <div>
                <StyledHeader className='navbar sticky-top'>
                    <h2>List of business</h2>
                    <Link to='./Booking/ListService'><button type="button" class="btn btn-outline-info">List of services</button></Link>
                </StyledHeader>

                {/* View function as a card for business */}
                <div class="card-columns" > 
                    {this.state.listBusinesses.map(p =>
                        <div class='card'>
                            <img class="card-img-top" src="https://static.dentaldepartures.com/clinics/dd_201610051019_57f519f1084de.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <div>
                                    <h3 class='card-title'>{p.b_name}</h3> <br />
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Contact:</b> {p.b_contact}</p>
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Description:</b> {p.b_descriptions}</p>
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Schedule:</b> {p.b_schedule}</p>
                                </div>
                                <br />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

