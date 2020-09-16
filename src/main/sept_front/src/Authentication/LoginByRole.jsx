import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const Styled = styled.div`
.login-by-roles{
    height:100%;
    width:100%;
    background: #424949
    background-position:center
    background-size:cover
    position:absolute
}

.form-box{
    width:380px;
    height:150px;
    position:relative;
    margin:17% auto;
    background:#fff
    padding:5px
    border-radius: 10px
    box-shadow: 0 0 10px 5px lightgrey
    overflow:hidden
}

.fa-arrow-left{
    color: black
    position:absolute;
    padding:5px
    cursor:pointer
}

.fa-arrow-left span{
    opacity:0
}

.fa-arrow-left:hover span{
   opacity:100
   transition:.75s ease
}

.login-by-role{
    font-family: 'Bebas Neue', cursive; 
    display: grid
    justify-content:space-around
    grid-gap:20px
    margin:8% auto
    
}
.login{
    font-size:25px
    letter-spacing:2px
    color: black
    text-decoration:none
    :hover{
        color:grey
    }
}

`

export default class Login extends React.Component {
    render() {
        return (
            <Styled>
                <div className="login-by-roles">
                    <div className="form-box">
                        <div className="backHomepage">
                            <Link to='/Home'>
                                <i class="fas fa-arrow-left"> <span>Back</span></i>
                            </Link>
                        </div>
                        <div className="login-by-role">
                            <Link className='login customer' to={`/Authentication/LoginByCustomer`}>
                                Log in as Customer
                        </Link>
                            <Link className='login admin' to={`/Authentication/LoginByAdmin`}>
                                Log in as an Admin
                        </Link>
                            {/* <Link to={`/Authentication/Register`}>
                            Don't have an account? Click here
                        </Link> */}
                        </div>

                    </div>

                </div>
            </Styled>
        )
    }
}