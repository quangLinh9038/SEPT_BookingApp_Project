import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const StyledGrid = styled.div`
display:grid;
grid-gap:20px;

`;
export default class OwnerPage extends React.Component {
    render() {
        return (
            <StyledGrid>
                <div class='card' style={{ width: '18rem' }}>
                    <img class='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8cyUrYvHcRDy0ogeHCORJ4TnGpXq1PYpwQ&usqp=CAU&fbclid=IwAR3ZARxNt_76xhIDvGxdVCCG_cHDmFQPPfbGjvjKsDOJlVQXvgowDLDrLE0 " alt="card image cap" />
                    <div class='card-body'>
                        <h4 class='card-title'>Nguyen Van A</h4>
                        <p class='card-text'><b>Owner ID:</b> 3872263 </p>
                        <p class='card-text'><b>Phone:</b> 0931234567 </p>
                        <p class='card-text'><b>Address:</b> District 7, HCMC </p>

                        {/* Button to link to list of employee and list of booking page for owner */}
                        <Link to={`/BusinessOwner/EmployeeList2`}><button type='button' class='btn btn-primary btn-sm'> Employee List</button></Link>
                        <span> </span>
                        <Link to={`/BusinessOwner/BookingList`}><button type='button' class='btn btn-primary btn-sm'> Booking List</button></Link>
                    </div>
                </div>


            </StyledGrid>
        )
    }
}