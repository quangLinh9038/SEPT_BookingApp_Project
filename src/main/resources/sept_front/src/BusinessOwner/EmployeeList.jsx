import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const StyledHeader = styled.div`
display:;
margin-bottom:20px;
margin-left:20px;
`
const url = ''
export default class ViewEmployeeList extends React.Component {
    constructor() {
        super()
        this.state = {
            lists: [],
            input: '', name: '', id: '', schedule: ''
        }
    }

    fetchLists() {
        fetch(url)
            .then(res => res.json())
            .then(json => this.setState({ lists: json }))
    }

    componentDidMount() {
        this.fetchLists()
    }

    handleChange(e) {
        let obj = {}
        obj[e.target.name] = e.target.value
        this.setState(obj)
    }

    search() {
        fetch(url)
            .then(res => res.json())
            .then(json => {
                let data = json.filter((d, i) => d.id == this.state.input)
                this.setState({ lists: data })
            })
    }

    render() {
        return (
            <div >
                <StyledHeader className='navbar sticky-top'>

                    <h2>Employee List</h2>
                    <ul class='row' style={{ gap: '15px' }}>
                        <li class='nav-item'>
                            <form action="" className='input-group md-form form-sm form-2 pl-0'>
                                <input class='form-control' placeholder='Enter name of employee'
                                    name='input' value={this.state.input}
                                    onChange={this.handleChange.bind(this)}
                                />
                                <div class='input-group-append'>
                                    <button class='input-group-text' type='button'>
                                        <i class='fa fa-search' aria-hidden='true'
                                            onClick={this.search.bind(this)}
                                        />
                                    </button>
                                </div>
                            </form>
                        </li>
                        <Link to={`/BusinessOwner/EmployeeMana`}>
                            <button type='button' className='btn btn-success'>
                                <i className='fa fa-address-book' style={{ paddingRight: '10px' }} />
                          New
                    </button>
                        </Link>
                    </ul>
                </StyledHeader>
                <table className='table table-hover text-center'>
                    <thead className='thead-dark'>
                        <tr>
                            <th>#</th>
                            <th>NAME</th>
                            <th>SCHEDULE</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <Link to={`/BusinessOwner/EmployeeMana`}>
                                <i style={{ color: 'red' }} className='fa fa-fw fa-plus' />
                            </Link>
                        </tr>
                    </tbody>
                </table>

            </div>
        )
    }
}