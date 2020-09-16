import React from 'react'
import styled from 'styled-components'

const Styled = styled.div`
nav{
    display:flex;
    justify-content: space-around;
    align-items:center;
    border-bottom: 5px double grey;
    font-family: 'Bebas Neue', cursive; 
    margin-left:80px
    margin-right:20px
}

.nav-title h1{
    font-weight:bold
    font-size:45px
    // text-transform:uppercase
    letter-spacing:15px;
    text-decoration:none;
}

// Table
table{
    width:93.5%
    margin:10px 10px 0 80px
}

// Mobile view
@media screen and (max-width:960px){
    nav{
        margin:0
    }

    .nav-title h1{
        font-size: 15px;
        letter-spacing:10px
        margin: 5px 0
    }

    table{
        width:100%
        margin:10px 0
    }
}
`
const urlService = 'http://localhost:8080/services'

export default class ServiceByBusiness extends React.Component {
    constructor() {
        super()
        this.state = {
            serviceFilter: [],
            id: '', name: '', duration: '', description: '', price: ''
        }
    }

    fetchFilterService(id) {
        fetch(urlService + '/' + id)
            .then(res => res.json())
            .then(json => this.setState({
                id: json.id, name: json.name, duration: json.duration,
                description: json.description, price: json.price
            }))
    }

    componentDidMount(){
        this.fetchFilterService()
    }

    render() {
        return (
            <Styled>
                <nav>
                    <div className="nav-title">
                        <h1>Service detail</h1>
                    </div>
                </nav>

                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>Name</th>
                            <th>Duration</th>
                            <th>Description</th>
                            <th>Price</th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                {this.props.match.params.name}
                            </td>
                            <td>
                                {this.props.match.params.duration}
                            </td>
                            <td>
                                {this.props.match.params.description}
                            </td>
                            <td>
                                {this.props.match.params.price}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </Styled>
        )
    }
}