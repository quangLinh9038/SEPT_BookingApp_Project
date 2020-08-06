import React from 'react';
import { Link } from 'react-router-dom';



export default class ListService extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='business-name'><h1>Dental Clinic</h1></div>
                <div className='list-service'>
                    <table class="table">
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col"></th>
                                <th scope="col">Service</th>
                                <th scope="col">Business</th>
                                <th scope="col">Description</th>
                                <th scope="col">Price Range</th>
                                <th scope="col">Status</th>
                                <th scope="col">Book</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Whitening</td>
                                <td>RMIT Dental Clinic</td>
                                <td>Whitening your teeth</td>
                                <td>100$-200$</td>
                                <td>Available</td>
                                <div className="book-button" style={{ paddingTop: '8px', textDecoration: 'none' }}>
                                    
                                <button type="button" class="btn btn-success btn-sm" data-toggle="modal" data-target="exampleModalCenter">Apply Now</button>
                                    <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body">
                                                    ...
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                                    <button type="button" class="btn btn-primary">Save changes</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}