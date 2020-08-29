import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
const Styled = styled.div`
div{
    margin:0px;
    padding:0px;
    box-sizing:border-box
}

.col-1 {width: 8.33%;}
.col-2 {width: 16.66%;}
.col-3 {width: 25%;}
.col-4 {width: 33.33%;}
.col-5 {width: 41.66%;}
.col-6 {width: 50%;}
.col-7 {width: 58.33%;}
.col-8 {width: 66.66%;}
.col-9 {width: 75%;}
.col-10 {width: 83.33%;}
.col-11 {width: 91.66%;}
.col-12 {width: 100%;}

.card{
    max-width:500px
    border:1px solid
    border-radius: 10px
    align-items:center
    margin:10px 0px 0px 20px
    :hover{
        box-shadow:8px 16px 32px 8px rgba(0,0,0,0.2);
        transition: 1s ease
        border-radius: 10px;
        transform:translateX(30px) scale(1.2)
    }
    over-flow:hidden
}

.card img{
    max-width: 300px
}

// .card img:hover{
//     transform: scale(1.1)
// }

.card-body{
    background-color: #f5f5f5
    padding-bottom: 10px
}

`;
export default class OwnerPage extends React.Component {
    render() {
        return (
            <Styled>
                <div className="row">
                    <div className="col-3">
                        <div class='card'>
                            <img class='card-img-top' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8cyUrYvHcRDy0ogeHCORJ4TnGpXq1PYpwQ&usqp=CAU&fbclid=IwAR3ZARxNt_76xhIDvGxdVCCG_cHDmFQPPfbGjvjKsDOJlVQXvgowDLDrLE0 " alt="card image cap" />
                            <div class='card-body'>
                                <h4 class='card-title'>Nguyen Van A</h4>
                                <p class='card-text'><b>Owner ID:</b> 3872263 </p>
                                <p class='card-text'><b>Phone:</b> 0931234567 </p>
                                <p class='card-text'><b>Address:</b> District 7, HCMC </p>

                                {/* Button to link to list of employee and list of booking page for owner */}
                                {/* <Link to={`/BusinessOwner/EmployeeList2`}><button type='button' class='btn btn-primary btn-sm'> Employee List</button></Link> */}
                                
                                {/* <Link to={`/BusinessOwner/BookingList`}><button type='button' class='btn btn-primary btn-sm'> Booking List</button></Link> */}
                            </div>
                        </div>
                    </div>
                </div>

            </Styled>
        )
    }
}