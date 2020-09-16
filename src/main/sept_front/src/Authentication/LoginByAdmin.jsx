import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'

const Styled = styled.div`
.log-in-container{
    height:100%;
    width:100%;
    // background-image: linear-gradient(to right, #ff105f, #ffad06);
    background: #424949
    background-position:center
    background-size:cover
    position:absolute
}

.form-box{
    width:380px;
    height:480px;
    position:relative;
    margin:6% auto;
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

.button-box{
    width:100px;
    margin:35px auto;
    position:relative;
    box-shadow: 0 0 20px 10px lightgrey
    border-radius:30px
}

.toggle-btn{
    padding:10px 30px
    cursor:pointer
    background: transparent
    border:0
    outline:none
    position:relative;
    font-weight:bold
}

#btn{
    background: linear-gradient(to right, #424949, #f5f5f5 );
    top:0
    left:0
    position:absolute
    width:110px
    height:100%
    border-radius:30px
    transition:.5s;
}

.social-icons{
    margin:30px auto
    text-align:center
}

.social-icons i{
    background: linear-gradient(45deg, black, transparent);
    color:white
    width:30px
    height:30px
    margin:0 14px
    padding-top:7px
    box-shadow: 0 0 20px 0 grey
    cursor:pointer
    border-radius: 50%
}

.input-group{
    top:180px;
    position:absolute;
    width:300px;
    transition:.5s;
    justify-content:center
}

.inputs-field{
    display:grid
    grid-template-columns: 1fr 1fr
}

.inputs-field .input-field{
    width:95%
}

.input-field{
    width:100%;
    padding:10px 0;
    margin: 10px 0
    border-top:0
    border-left:0
    border-right:0;
    border-bottom: 3px solid black
    outline:none
    background:transparent
}

.login{
    background: linear-gradient(to right, #424949, #f5f5f5 );
    margin:auto
    margin:10px 0
    color:white
    font-size:15px
    font-weight:bold
    letter-spacing:1px
    display:block
    border-radius: 30px
    border:1px solid
    outline:none
    // width:60%
    padding:10px 80px
    cursor:pointer
    :hover{
        transition:1.5s ease
        font-size:40px
    }
}
#login{
    left:40px
}

.close{
    outline:none
    border:0
}

// MODAL
.destination{
    display:grid
    grid-template-columns:1fr
    text-align:center
} 

.modal{
    margin-left: 35%
    font-family: 'Bebas Neue', cursive;

}

.modal .modal-body{
    margin:0px;
    padding:0px
    justify-content:center
}

.modal-header .modal-title{
    margin:0;
    padding:0;
    padding-left:10px
}
`
const urlAdmins = 'http://localhost:8080/admin'
export default class LoginByAdmin extends React.Component {
    constructor() {
        super()
        this.state = {
            listAdmins: [],
            usernameAdmin: '', passwordAdmin: ''
        }
    }

    fetchAdmins() {
        fetch(urlAdmins)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.username == this.state.usernameAdmin && d.password == this.state.passwordAdmin)
                // console.log(data)
                this.setState({ listAdmins: data })
            })
    }

    componentDidMount() {
        this.fetchAdmins()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    // setData(){
    //     sessionStorage.setItem('mydata1',JSON.stringify(this.state.listAdmins))
    // }

    // getData(){
    //     let data = sessionStorage.getItem('mydata1')
    //     data = JSON.parse(data)
    //     console.log(data)
    // }

    render() {
        return (
            <Styled>
                <div className="log-in-container">
                    <div className="form-box">
                        <div className="backHomepage">
                            <Link to='/Home'>
                                <i class="fas fa-arrow-left"> <span>Back</span></i>
                            </Link>
                        </div>

                        <div className="button-box">
                            <div id='btn'></div>
                            <button type='button' className='toggle-btn loginn' >Login</button>
                            {/* <button type='button' className='toggle-btn registerr' disabled>Register</button> */}
                        </div>
                        <div className="social-icons">
                            <i className='fa fa-facebook' />
                            <i className='fa fa-twitter' />
                            <i className='fa fa-instagram' />
                        </div>

                        <form id='login' class='input-group'>
                            <input type="text" className='input-field'
                                placeholder='Username'
                                name='usernameAdmin' value={this.state.usernameAdmin}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                            <input type='password' className='input-field'
                                placeholder='Password'
                                name='passwordAdmin' value={this.state.passwordAdmin}
                                onChange={this.handleChange.bind(this)}
                                required
                            />

                            <div className="footer">
                                <button type='button' className='login' onClick={this.fetchAdmins.bind(this)} data-toggle='modal' data-target='#formLoginAdm'>Login</button>
                                {/* <button onClick={this.getData()}></button>
                        <button onClick={this.setData()}></button> */}
                                {this.state.listAdmins.map(p =>
                                    <div>

                                        <div className='modal fade' id='formLoginAdm' tabIndex='-1' role='dialog' aria-labelledby='formEditTitle' aria-hidden='true'>
                                            <div className="modal-dialog modal-dialog-centered" role='document'>
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                       <span style={{fontSize:'20px', paddingLeft:'100px'}}>
                                                            Login Successfully! Choose your destination
                                                        </span> 

                                                        <div className="destination">
                                                            <Link to={`/Employee/Owner/${p.id}/${p.name}`}>
                                                                Admin page
                                                            </Link>
                                                        </div>
                                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
                {/* <Form>
                    <Form.Row>
                        <Form.Group as={Col} md='6' controlId='formGridUserName'>
                            <Form.Label>Username:</Form.Label>
                            <Form.Control type='text' placeholder='Username'
                                name='usernameAdmin' value={this.state.usernameAdmin}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                        <Form.Group as={Col} md='6' controlId='formGridPassword'>
                            <Form.Label>Password:</Form.Label>
                            <Form.Control type='password' placeholder='Password'
                                name='passwordAdmin' value={this.state.passwordAdmin}
                                onChange={this.handleChange.bind(this)}
                            />
                        </Form.Group>
                    </Form.Row>



                </Form> */}
            </Styled>
        )
    }
}