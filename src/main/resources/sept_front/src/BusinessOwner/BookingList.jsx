import React from 'react'
import styled from 'styled-components';
import BookService from '../Components/Booking/BookService';

const StyledGrid = styled.div`
display: grid;
grid-gap:10px;
grid-template-columns: repeat(1, 1fr);
`
export default class ViewBookingList extends React.Component{
    render(){
        return(
            <StyledGrid>
                <BookService/>
            </StyledGrid>          
        )
    }
}