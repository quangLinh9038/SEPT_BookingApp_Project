import React from 'react';
export default class Profile extends React.Component {
    render() {
        return (
            // <div class='container'>
                <div className='row'>
                    <div className='col-4'>
                        <div className='user-card' style={{ width: '350px' }} >
                            <div class="card" >
                                <img style={{ width: '300px', paddingLeft:'40px'}} class="card-img-top" src="https://cdn4.iconfinder.com/data/icons/user-avatar-flat-icons/512/User_Avatar-36-512.png" alt="Card image" />
                                <div class="card-body">
                                    <h4 class="card-title">Nguyen Thanh Dat</h4>
                                    <p class="card-text"><b>Customer ID:</b> 3697822</p>
                                    <p class="card-text"><b>Phone:</b> 0389989797</p>
                                    <p class="card-text"><b>Adress:</b> District 7, HCMC</p>
                                    

                                    <a href="#" class="btn btn-primary">Edit Profile</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div class='user-list-table' style={{width:'900px'}} >
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Business</th>
                                        <th scope="col">Service</th>
                                        <th scope="col">Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Dental Clinic</td>
                                        <td>Whitening</td>
                                        <td>21/7/2020</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            // </div>
        )
    }
}
