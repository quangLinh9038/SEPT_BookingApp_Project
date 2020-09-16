import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
const Styled = styled.div`
{
    margin:0
    padding:0
}

.welcome-section{
    position:absolute
    width:100%
    height:100%;
    top:0;
    left:0;
    background-color:#000;
    overflow:hidden
    font-family: 'Bebas Neue', cursive;
}

.welcome-section .content-wrap{
    position: absolute;
    left:50%;
    top:45%;
    transform: translate3d(-50%, -50%, 0);
    letter-spacing:10px
}

.welcome-section .content-wrap .fly-in-text{
    list-style:none;
    text-align:center
}

.welcome-section .content-wrap .fly-in-text li{
    display:inline-block;
    margin-right:30px;
    font-size:5em;
    color:#fff;
    opacity:1;
    transition: all 2s ease;
    
}

.welcome-section .content-wrap .fly-in-text li:last-child{
    margin-right:0;
}

.welcome-section .content-wrap .enter-button{
    display:block
    text-align:center;
    font-size:1.25em;
    text-decoration:none;
    text-transform:uppercase;
    color:#adff2f;
    opacity:1;
    transition: all 1s ease 2s;
    cursor:pointer;
    letter-spacing:4px
}

.welcome-section.content-hidden .content-wrap .fly-in-text li{
    opacity:0;
    
}

.welcome-section.content-hidden .content-wrap .fly-in-text li:nth-child(1){
    transform:translate3d(-100px,0,0)
}

.welcome-section.content-hidden .content-wrap .fly-in-text li:nth-child(2){
    transform:translate3d(100px,0,0)
}

.welcome-section.content-hidden .content-wrap .enter-button{
    opacity:0;
    transform: translate3d(0,-30px,0)
}

@media (max-width:960px){
    .welcome-section .content-wrap .fly-in-text li{
        font-size:3em;
    }

    .welcome-section .content-wrap .enter-button{
        font-size:1em;
    }
}

`

export default class Welcome extends React.Component {
    render() {
        return (
            <Styled>
                <div className="welcome-section content-hidden">
                    <div className="content-wrap">
                        <ul className='fly-in-text'>
                            <li>ONLINE</li>
                            <li>BOOKIN'</li>
                        </ul>
                    
                        <div className="enter-button">Enter</div>
                    
                    </div>
                </div>
            </Styled>
        )
    }
}