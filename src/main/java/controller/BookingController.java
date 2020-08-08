package controller;


import model.Booking;
import model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BookingService;
import service.CustomerService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class BookingController {

    public BookingController(BookingService bookingService) {
        this.bookingService = bookingService;
    }

    @Autowired
    private BookingService bookingService;

    @RequestMapping(path = "booking", method = RequestMethod.GET)
    public List<Booking> getAllCustomer(){
        return bookingService.getAllBooking();
    }

    @RequestMapping(path = "booking", method = RequestMethod.POST)
    public void addCustomer(@RequestBody Booking booking){
        bookingService.addBooking(booking);
    }

    @RequestMapping(path = "booking", method = RequestMethod.PUT)
    public void updateCustomer(@RequestBody Booking booking){
        bookingService.addBooking(booking);
    }

    @RequestMapping(path = "booking/delete", method = RequestMethod.DELETE)
    public void deleteCustomer(@RequestParam int id){
        bookingService.deleteBooking(id);
    }
}
