import React from 'react';
import Homepage from './Homepage.css';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';



export default class MediaCart extends React.Component {
    // state = {
    //     redirect: false
    //   }
    //   setRedirect = () => {
    //     this.setState({
    //       redirect: true
    //     })
    //   }
    //   renderRedirect = () => {
    //     if (this.state.redirect) {
    //       return <Redirect to='/BookService' />
    //     }
    //   }
    render() {
        return (
            
            <div className='card-deck'style={{ paddingLeft:'90px', paddingTop:'10px', paddingRight:'30px', fontSize:'20px', height:'1rem', width:'50rem'}}>
                <div class="card">
                    <img style={{height:'150px'}} class="card-img-top" src="https://static.dentaldepartures.com/clinics/dd_201610051019_57f519f1084de.jpg" alt="Card image cap" />
                    <div class="card-body">
                        <h3 class='card-title'>Dental Clinic</h3>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Address:</b> 702 Nguyen Van Linh, Tan Phong, District 7</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Phone:</b> 0389989797</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Email:</b> dental.clinic@gmail.com</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Description:</b> Premium Dental Clinic brings you the best services in town!</p>
                        <Link to= './Booking/ListService'><button type="button" class="btn btn-outline-info">Book service</button></Link>
                    </div>
                </div>
            
            <div class="card">
                <img style={{height:'150px'}} class="card-img-top" src="https://beuhairsalon.com/wp-content/uploads/2017/09/beuhair-interior-3-min-cropped.jpg"  />
                <div class="card-body">
                <h3 class='card-title'>Hairdresser</h3>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Address:</b> 702 Nguyen Van Linh, Tan Phong, District 7</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Phone:</b> 0389989797</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Email:</b> dental.clinic@gmail.com</p>
                        <p class="card-text" style={{fontSize:'14px'}}><b>Description:</b> Premium Dental Clinic brings you the best services in town!</p>
                        <Link to= './Booking/ListService'><button type="button" class="btn btn-outline-info">Book Service</button></Link>
                </div>
            </div>
            
            </div>

    

        )
    }
}

