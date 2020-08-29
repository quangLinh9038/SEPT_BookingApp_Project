import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
const TopNavStyle = styled.div`
*{
    margin: 0px;
    padding:0px;
    box-sizing:border-box;
}

nav{
    display:flex;
    justify-content: space-around;
    align-items:center;
    min-height:1vh;
    background-color:#424949
    font-family: 'Allura', cursive;
}

.logo h4{
    color:#9FFFCB;
    // text-transform: uppercase;
    letter-spacing:3px;
    font-size:45px;
    text-decoration:none;
}

.nav-links{
    display:flex;
    // background-color:red;
    justify-content: space-around;
    width:15%;
    position:absolute;
    right:15px
}

.nav-links li{
    list-style:none;
}

.nav-links i{
    color:white;
    text-decoration:none;
    letter-spacing:5px;
    // font-weight:bold;
    font-size:25px;
   
}

.burger{
    display:none;
}

.burger div{
    width:25px;
    height:3px;
    background-color:white;
    margin:5px;
    transition: all 0.5s ease;
}

@media screen and (max-width:960px){
    .sidenav{
        transform:translateX(-100%);
        transition: transform 0.5s ease-in;
    }

    .sidenav li{
        opacity:0
    }
    
    .burger{
        display:block;
        position:absolute;
        left:13px;
        cursor:pointer
    }

    .nav-links{
        display:none
    }

    // .nav-links{
    //     position:absolute;
    //     left:0px;
    //     height:99vh;
    //     top:1vh;
    //     background-color:#424949;
    //     display:flex;
    //     flex-direction:column;
    //     align-items:center;
    //     width:13%;

    // }

}

.nav-active{
    transform:translate(0%)
}

.sidenav{
    // display:flex;
    text-align:center;
    justify-content:space-around;
    position:fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 60px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 2.5em;      /* Stay at the top */
    background-color: #424949; 
    overflow-x: hidden;     /* Disable horizontal scroll */    
}

.sidenav li{
    list-style:none
}

.sidenav i{
    color:#9FFFCB;
    text-decoration:none;
    font-size:40px;
    margin-top:30px;
}

.toggle .line1{
    transform:rotate(-45deg) translate(-5px,6px);
}
.toggle .line2{
    opacity:0
}
.toggle .line3{
    transform:rotate(45deg) translate(-5px,-6px);
}

@keyframes sideNavFade{
    from{
        opacity:0;
        transform:translateX(50px)
    }
    to{
        opacity:1;
        transform:translateX(0px)
    }
}

`

export default class NavUser extends React.Component {
    render() {     
        return (
            <TopNavStyle>
                <nav>
                    <div className="burger">
                        <div className='line1'></div>
                        <div className='line2'></div>
                        <div className='line3'></div>
                    </div>

                    <div className="logo">
                        <Link to ={`/`} style={{textDecoration:'none'}}>
                            <h4>Bookin'</h4>
                        </Link>
                    </div>

                    <ul className='nav-links'>
                        <li><i className='fa fa-facebook' /></li>
                        <li><i className='fa fa-twitter' /></li>
                        <li><i className='fa fa-instagram' /></li>
                        <li>
                            <Link to={`/Authentication/LoginByRole`} style={{fontSize:'20px'}}>
                                log in
                            </Link>
                        </li>
                    </ul>

                </nav>
  
                {/* <div className="sidenav">    
                    <ul>
                        <li>
                            <Link to ={`/Components/Home/HomepageBS`}><i className='fas fa-home' /> </Link>
                        </li>

                        <li>
                            <Link to ={`/Employee/Owner`}><i className='fas fa-user-tie' /> </Link>
                        </li>

                        <li>
                            <Link to ={`/Authentication/LoginByCustomer`}><i className='fas fa-user-circle' /></Link>
                        </li>

                        <li style={{marginTop:'27em'}}>
                            <i style={{color:'white'}} className='fa fa-power-off'/>
                        </li>
                    </ul>   
                </div>        */}
                
            </TopNavStyle>
        )
    }
}
