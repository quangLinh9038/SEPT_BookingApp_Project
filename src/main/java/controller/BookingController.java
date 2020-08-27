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
    public List<Booking> getAllBooking(){
        return bookingService.getAllBooking();
    }

    @RequestMapping(path = "booking/admin/{id}", method = RequestMethod.GET)
    public List<Booking> getBookingsByAdminId(@PathVariable int id){
        return bookingService.getBookingsByAdminId(id);
    }


    @RequestMapping(path = "booking", method = RequestMethod.POST)
    public void addBooking(@RequestBody Booking booking){
        bookingService.addBooking(booking);
    }

    @RequestMapping(path = "booking", method = RequestMethod.PUT)
    public void updateBooking(@RequestBody Booking booking){
        bookingService.addBooking(booking);
    }

    @RequestMapping(path = "booking/delete/{id}", method = RequestMethod.DELETE)
    public void deleteBooking(@PathVariable int id){
        bookingService.deleteBooking(id);
    }
}
