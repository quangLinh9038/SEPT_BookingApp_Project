import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import BookingList from '../BusinessOwner/BookingList';
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

.wrapper{
    height:auto;
    width:100%;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    border:1px solid
    border-radius: 10px
    margin-top: 10px
    margin-left:80px
    overflow:hidden
    background-color:#fff
    justify-content:center
    align-items:center
    text-align:center
}

.wrapper img{
    margin:0px;
    padding:10px;
    height:auto
    width: 100%
    // :hover{
    //     transition: 1s ease
    //     transform: scale(1.4)
    // }
}


.btn{
    border:2px solid #fb2274;
    :hover{
        background-color:red
        color:white
    }
    width:80px;
    height:35px;
    line-height:35px;
    word-spacing:0;
    text-decoration:none;
    font-size:15px;
    margin: 0 auto;
    border-radius: 25px
    font-family: 'Libre Caslon Display', serif;
    font-weight:bold
}

.btns{
    padding:10px
}


`;


const urlAdmin = 'http://localhost:8080/admin'
export default class OwnerPage extends React.Component {
    constructor() {
        super()
        this.state = {
            admin: [],
            name:'',id:''
        }
    }

    fetchAdmins(id) {
        fetch(urlAdmin + '/' + id)
            .then(res => res.json())
            .then(json => this.setState({
                id: json.id, name: json.name
            }))
    }

    componentDidMount() {
        this.fetchAdmins()
    }

    render() {
        return (
            <Styled>
                <div className="row">
                    <div className="col-2">
                        <div class='wrapper'>
                            <img className='img-wrapper' src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRk8cyUrYvHcRDy0ogeHCORJ4TnGpXq1PYpwQ&usqp=CAU&fbclid=IwAR3ZARxNt_76xhIDvGxdVCCG_cHDmFQPPfbGjvjKsDOJlVQXvgowDLDrLE0 " alt="card image cap" />
                            <div className="title">
                                {this.props.match.params.name}
                            </div>
                            <div className="btns">
                                <Link to={`/BusinessOwner/EmployeeList2`} style={{ textDecoration: 'none' }}>
                                    <div className="btn">
                                        Employee
                                        </div>
                                </Link>

                                {/* <Link to={`/Components/Booking/BookService`} style={{ textDecoration: 'none' }}>
                                    <div className="btn">
                                        History
                                        </div>
                                </Link> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-10">
                        <BookingList />
                    </div>
                </div>
            </Styled>
        )
    }
}