import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Col, CardColumns, Card, Row } from 'react-bootstrap'

const Styled = styled.div`
.log-in-container{
    height:100%;
    width:100%;
    // background-image: url(https://kientrucnhat.com/wp-content/uploads/du-an-coffee-shop-classic-CBS-Viet-Nam-03.jpg);
    // background-image: linear-gradient(45deg, black, transparent);
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
    width:224px;
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

#register input:valid{
    border-bottom: 3px solid #41E61E
    transition:1s ease
}

.loginregister{
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

.close{
    outline:none
    border:0
}

#login{
    left:40px
}
#register{
    left:440px
}

// MODAL
.destination{
    display:grid
    grid-template-columns:1fr 1fr
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
const urlCustomers = 'http://localhost:8080/customers'
export default class LoginByCustomer extends React.Component {
    constructor() {
        super()
        this.state = {
            listCustomers: [],
            listCustomersRegister: [],
            username: '', password: '',
            input: '', name: '', id: '', address: '', contact: '', email: '', username: '', password: '',
        }
    }

    fetchCustomers() {
        fetch(urlCustomers)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.username == this.state.username && d.password == this.state.password)
                // console.log(data)
                this.setState({ listCustomers: data })
            })
    }

    fetchCustomersRegister() {
        fetch(urlCustomers)
            .then(res => res.json())
            .then(json => this.setState({ listCustomersRegister: json }))
    }

    componentDidMount() {
        this.fetchCustomers()
        this.fetchCustomersRegister()
    }

    handleAddCustomer() {
        let emp = {
            id: this.state.id, name: this.state.name, address: this.state.address, contact: this.state.contact, email: this.state.email,
            username: this.state.username, password: this.state.password
        }
        fetch(urlCustomers, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(emp)
        })
            .then(res => this.fetchCustomersRegister())
    }


    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    setData() {
        sessionStorage.setItem('mydata', JSON.stringify(this.state.listCustomers))
    }

    getData() {
        let data = sessionStorage.getItem('mydata')
        data = JSON.parse(data)
        console.log(data)
    }

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
                            <button type='button' className='toggle-btn registerr' >Register</button>
                        </div>
                        <div className="social-icons">
                            <i className='fa fa-facebook' />
                            <i className='fa fa-twitter' />
                            <i className='fa fa-instagram' />
                        </div>

                        <form id='login' class='input-group'>
                            <input type="text" className='input-field'
                                placeholder='Username'
                                name='username' value={this.state.username}
                                onChange={this.handleChange.bind(this)}
                                required
                            />
                            <input type="password" className='input-field'
                                placeholder='Password'
                                name='password' value={this.state.password}
                                onChange={this.handleChange.bind(this)}
                                required
                            />

                            <div className="footer">
                                <button type='button' className='loginregister' onClick={this.fetchCustomers.bind(this)} data-toggle='modal' data-target='#formLoginCus'>Login</button>
                                <button onClick={this.getData()} style={{ display: 'none' }}></button>
                                <button onClick={this.setData()} style={{ display: 'none' }}></button>
                                {this.state.listCustomers.map(p =>
                                    <div>
                                        <div className='modal fade' id='formLoginCus' tabIndex='-1' role='dialog' aria-labelledby='formLoginCusTitle' aria-hidden='true'>
                                            <div className="modal-dialog modal-dialog-centered" role='document'>
                                                <div className="modal-content">
                                                    <div className="modal-body">
                                                        <span style={{ fontSize: '20px', paddingLeft: '100px' }}>
                                                            Login Successfully! Choose your destination
                                                    </span>

                                                        <div class='destination'>
                                                            <Link to={`/Customer/Profile/${p.id}/${p.name}/${p.address}/${p.contact}/${p.email}/${p.username}/${p.password}`}>
                                                                Profile page
                                                        </Link>

                                                            <Link to={`/Components/Home/HomepageCustomer`}>
                                                                Home page
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


                        <form id='register' class='input-group'>
                            <div className="inputs-field">
                                <input type="text" className='input-field'
                                    placeholder='Name' id='nameCus' pattern='[A-Z][a-z]{4,}' title='Name must capitalize the first letter and should not have number/special character'
                                    name='name' value={this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <input type="text" className='input-field'
                                    placeholder='Address' id='addressCus' pattern='.{10,}' title='Address format: address, street, district, city'
                                    name='address' value={this.state.address}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <input type="text" className='input-field'
                                    placeholder='Contact' id='contactCus'
                                    pattern='[086|096|097|098|032|033|034|035|036|037|038|039|
                                    089|090|093|070|079|077|076|078|
                                    088|091|094|083|084|085|081|082|
                                    092|056|058|
                                    099|059][0-9]{9,10}'
                                    title='Phone contact must be 10 number and contain national phone code'
                                    name='contact' value={this.state.contact}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <input type="email" className='input-field'
                                    placeholder='Email' id='emailCus' minLength='16' title='Email must have at least 6 characters '
                                    name='email' value={this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                                <input type="text" className='input-field'
                                    placeholder='Username' id='usernameCus' pattern='[a-z,A-Z,0-9]{4,10}' title='Username should not contain special character and must be 4-10 characters in length'
                                    name='username' value={this.state.username}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />

                                <input type="password" className='input-field'
                                    placeholder='Password' id='passwordCus' pattern='[A-Z][a-z,A-Z,0-9,!~`@#$%^*]{6,}' title='Password must be at least 6 characters and capitalize the first letter'
                                    name='password' value={this.state.password}
                                    onChange={this.handleChange.bind(this)}
                                    required
                                />
                            </div>

                            <button type='btn' className='loginregister' onClick={this.handleAddCustomer.bind(this)}
                                data-toggle='modal' data-target='#formNotification'
                            >Register</button>

                            {/* <div className='modal fade' id='formNotification' tabIndex='-1' role='dialog' aria-labelledby='formNotificationTitle' aria-hidden='true'>
                                <div className="modal-dialog modal-dialog-centered" role='document'>
                                    <div className="modal-content">
                                        <div className="modal-body">
                                            <span style={{fontSize:'60px'}}>
                                                Register Successfully ! 
                                            </span> 
                                            <button type='button' class='close' data-dismiss='modal'>
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </form>
                    </div>
                </div>
            </Styled>
        )
    }
}