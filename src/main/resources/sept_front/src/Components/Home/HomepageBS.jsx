import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';
const Styled = styled.div`
{
    margin: 0px;
    padding:0px;
    box-sizing:border-box;
}

// Nav style
nav{
    display:flex;
    justify-content: space-around;
    align-items:center;
    border-bottom: 5px double grey;
    font-family: 'Bebas Neue', cursive; 
}

.nav-title h1{
    font-weight:bold
    font-size:45px
    // text-transform:uppercase
    letter-spacing:15px;
    text-decoration:none;
}

.nav-links{
    position:absolute;
    right:70px
}

.nav-links-mobile{
    display:none;
    position:absolute;
    top:15px;
    right:15px;
}

.nav-links-mobile i{
    color:#9FFFCB
    font-size:15px
}

.nav-links .btn{
    display:block;
    border:2px solid #fb2274;
    :hover{
        background-color:red
        color:white
    }
    width:110px;
    height:35px;
    line-height:35px;
    word-spacing:0;
    text-decoration:none;
    font-size:20px;
    margin: 0 auto;
    border-radius: 25px
}

.dropdown{
    display:inline-block;
    cursor:pointer;
    position:absolute;
    left:70px
}

.dropdown .dropdown-content{
    display:none;
    position:absolute;
    background-color:#f9f9f9;
    min-width:160px;
    box-shadow:8px 16px 32px 8px rgba(0,0,0,0.2);
    padding:0;
    margin:0px 16px;
    z-index:1;
    border: 1px solid #DCDCDC;
    border-radius: 25px 25px 25px 25px 
}

.dropdown:hover .dropdown-content{
    display:block
}

.dropdown div.dot{
    width:5px;
    height:5px;
    background-color:black;
    border-radius: 25px
}

.dropdown-content li{
    list-style:none
    margin:0px;
    padding:0px;
    :hover{
        background-color:red
        color:white
    }
}

.dropdown-content li.bottom{
    :hover{
        border-radius:0 0 25px 25px
    }    
}

.dropdown-content li.active{
    background-color: #4CAF50;
    color:white;
    border-radius:25px 25px 0 0 
}

.dropdown-content ul{
    margin:0px;
    padding:0px;
}

.dropdown-content a{
    text-decoration:none;
    font-size:20px
}

// Portfolio styles

.content-wrapper{
    margin: 0px;
    padding:0px;
    box-sizing:border-box;
    width:100%;
    font-family: 'Libre Caslon Display', serif;
    font-size:16px
    overflow-x:hidden
}

.portfolio-items-wrapper{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr
}

.portfolio-item-wrapper{
    position:relative;
}

.portfolio-background{
    overflow:hidden
    height:300px;
    max-width:100%;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

.portfolio-img-background{
    height:300px;
    max-width:100%;
    background-size: cover;
    background-position:center;
    background-repeat: no-repeat;
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    :hover{
        transition:1s ease;
        filter:brightness(30%)
    }
    :hover{
        transition: 1s ease
        transform: scale(1.2)
    }
}

.img-text-wrapper{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    position:absolute;
    top:0;
    display:flex;
    flex-direction:column;
    padding-left:10px
    color:white
}

.logo-wrapper{
    font-size:30px;
    font-weight:bold
    text-transform:uppercase
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}

.portfolio-item-wrapper:hover .subtitle{
    color:white
    transition:1s ease;
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-weight:600;
}
.subtitle{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
    font-weight:600;
    color:transparent;
    :hover{
        color:white
        transition:1s ease;
    }
}
.subtitle p{
    margin:0px;
    padding:0px;
    box-sizing:border-box;
}
.subtitle .listofservices{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr
}

.listofservice{
    display:flex;
    margin:0;
    border-style:none;
    justify-content:center
}

.listofservice div{
    margin:0;
    padding-left:5px
}

// Table
table{
    width:95%
}
// Mobile view
@media screen and (max-width:960px){
    .content-wrapper{
        padding:5px
        font-size:12px
    }

    .nav-links{
        display:none
    }

    .dropdown{
        display:none
    }
    
    .nav-title h1{
        font-size: 15px;
        letter-spacing:10px
        margin: 5px 0
    }

    .nav-links-mobile{
        display: block;
    }

    .portfolio-items-wrapper{
        display:grid;
        grid-gap:5px;
        grid-template-columns: repeat(2, 1fr);
    }

    .portfolio-background{
        height:200px
    }

    .portfolio-img-background{
        height:200px;
        width:100%
    }
    
    table{
        width:100%
    }
}



`
const urlBusiness = 'http://localhost:8080/business'
const urlService = 'http://localhost:8080/services'
export default class MediaCart extends React.Component {
    constructor() {
        super()
        this.state = {
            listBusinesses: [],
            listServices: [],
            id: '', name: '', contact: '', descriptions: '', schedule: ''
        }
    }
    // fetch Business api to front-end
    fetchListBusinesses() {
        fetch(urlBusiness)
            .then(res => res.json())
            // .then(json=>console.log(json))
            .then(json => this.setState({ listBusinesses: json }))
    }

    fetchListServices() {
        fetch(urlService)
            .then(res => res.json())
            .then(json => this.setState({ listServices: json }))
    }

    componentDidMount() {
        this.fetchListBusinesses()
        this.fetchListServices()
    }

    render() {
        return (
            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>List of businesses</h1>
                    </div>

                    <div className="dropdown">
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>

                        <span className="dropdown-content">
                            <ul>
                                <li className='active'><a>Dashboard view</a></li>
                                <li className='middle' data-view='list-view'><a>List view</a></li>
                                <li className='bottom' data-view='card-view'><a>Card view</a></li>
                            </ul>
                        </span>
                    </div>

                    <div className="nav-links">
                        <Link to='./Booking/ListService' style={{ textDecoration: 'none' }}>
                            <div className="btn">
                                List services
                            </div>
                        </Link>
                    </div>

                    <div className="nav-links-mobile">
                        <Link to='./Booking/ListService' style={{ textDecoration: 'none' }}>
                            <i className='fa fa-list' />
                        </Link>
                    </div>


                </nav>

                {/* View function as a card for business */}
                <div className="content-wrapper">
                    <div className="portfolio-items-wrapper card-view">
                        {this.state.listBusinesses.map(p =>
                            <div className="portfolio-item-wrapper">
                                <div className='portfolio-background'>
                                    <img className="portfolio-img-background" src="https://static.dentaldepartures.com/clinics/dd_201610051019_57f519f1084de.jpg" alt="Card image cap" />
                                </div>

                                <div className="img-text-wrapper">
                                    <div className="logo-wrapper">
                                        {p.name}
                                    </div>

                                    <div className="subtitle">
                                        <p>~ Contact: {p.contact}</p>
                                        <p>~ Description: {p.descriptions}</p>
                                        <p>~ Schedule: {p.schedule}</p>
                                        <p>~ List of services:
                                            {this.state.listServices.filter(q => q.business?.id == p.id).map(q =>
                                            <ul className='listofservices'>
                                                <li>{q.name}</li>
                                            </ul>
                                        )}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="portfolio-items-wrapper list-view" style={{display:'none'}}>
                        <table className='table table-hover text-center'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Duration</th>
                                    <th>Descriptions</th>
                                    <th>Schedule</th>
                                    <th>Services</th>
                                </tr>
                            </thead>

                            {this.state.listBusinesses.map(p =>
                                <tbody>
                                    <tr>
                                        <td>{p.id}</td>
                                        <td>{p.name}</td>
                                        <td>{p.contact}</td>
                                        <td>{p.descriptions}</td>
                                        <td>{p.schedule}</td>
                                        <td className='listofservice'>
                                            {this.state.listServices.filter(q => q.business?.id == p.id).map(q =>                
                                                  <div>{q.name}</div>    
                                            )}
                                        </td>
                                    </tr>
                                </tbody>
                            )}
                        </table>
                    </div>
                </div>

            </Styled>
        )
    }
}

