import React from 'react'
import styled from 'styled-components';

const StyledGrid = styled.div`
display: grid;
grid-gap:10px;
grid-template-columns: repeat(1, 1fr);
`
export default class ViewBookingList extends React.Component{
    render(){
        return(
            <StyledGrid>
                <span>Name:MVC, id:s3682365</span>
                <span>Name:NDI, id:s321341</span>
                <span>Name:ALQ, id:s5433457</span>
                <span>Name:DDQ, id:s5435432214</span>

            </StyledGrid>

            
        )
    }
}