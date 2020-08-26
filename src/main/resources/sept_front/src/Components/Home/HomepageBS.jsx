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






// Mobile view
@media screen and (max-width:960px){
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
}



`
const urlBusiness = 'http://localhost:8080/business'
export default class MediaCart extends React.Component {
    constructor() {
        super()
        this.state = {
            listBusinesses: [],
            id: '', name: '', contact: '', descriptions: '', schedule: ''
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
                                <li className='middle'><a>List view</a></li>
                                <li className='bottom'><a>Card view</a></li>
                            </ul>
                        </span>
                    </div>

                    <div className="nav-links">
                        <Link to='./Booking/ListService' style={{textDecoration:'none'}}>
                            <div className="btn">
                                List services
                            </div>
                        </Link>
                    </div>

                    <div className="nav-links-mobile">
                        <Link to='./Booking/ListService' style={{textDecoration:'none'}}>
                            <i className='fa fa-list' />
                        </Link>
                    </div>

                    
                </nav>

                {/* View function as a card for business */}
                <div class="card-columns" >
                    {this.state.listBusinesses.map(p =>
                        <div class='card'>
                            <img class="card-img-top" src="https://static.dentaldepartures.com/clinics/dd_201610051019_57f519f1084de.jpg" alt="Card image cap" />
                            <div class="card-body">
                                <div>
                                    <h3 class='card-title'>{p.name}</h3> <br />
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Contact:</b> {p.contact}</p>
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Description:</b> {p.descriptions}</p>
                                    <p class="card-text" style={{ fontSize: '14px' }}><b>Schedule:</b> {p.schedule}</p>
                                </div>
                                <br />
                            </div>
                        </div>
                    )}
                </div>
            </Styled>
        )
    }
}

