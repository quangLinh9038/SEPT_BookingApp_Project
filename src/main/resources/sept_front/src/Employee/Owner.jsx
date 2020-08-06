import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledGrid = styled.div`
display:grid;
grid-gap:20px;

`;
export default class OwnerPage extends React.Component {
    render(){
        return(
            <StyledGrid>
                <Link to={`/BusinessOwner/EmployeeList`}>View employee list</Link>
                <Link to={`/BusinessOwner/BookingList`}>View booking list</Link>
                
            </StyledGrid>
        )
    }
}