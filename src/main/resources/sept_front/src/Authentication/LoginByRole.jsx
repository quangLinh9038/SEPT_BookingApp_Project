import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'
const Styled = styled.div`
.input-box{
    display:grid
    justify-content:center
    border:1px solid
    margin:300px
}

`

export default class Login extends React.Component {
    render(){
        return(
            <Styled>
                <div className="input-box">
                <Link to={`/Authentication/LoginByCustomer`}>
                Log in as Customer
                </Link>
                <Link to={`/Authentication/LoginByAdmin`}>
                Log in as Admin
                </Link>
                <Link to={`/Authentication/Register`}>
                Don't have an account? Click here
                </Link>
                </div>
            </Styled>
        )
    }
}