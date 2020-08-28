package service;


import model.*;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import javax.transaction.Transactional;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * Created by Doan Lam on 05 Aug 2020
 * BookingService class
 * CRUD functions
 */

@Transactional
@org.springframework.stereotype.Service
public class BookingService {

    @Autowired
    private SessionFactory sessionFactory;

    public BookingService(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public void addBooking(Booking booking){
        if(booking.getDate_booked() == null){
            Date date = new Date();
            SimpleDateFormat formatterDate = new SimpleDateFormat("dd-MM-yyyy");
            booking.setDate_booked(formatterDate.format(date));
        }

        //set admin_id in booking
        //
        if(booking.getAdmin() != null){
            int id = booking.getAdmin().getId();
            Query query = sessionFactory.getCurrentSession().createQuery("from Admin where id =:id");
            query.setInteger("id",id);
            Admin admin = (Admin) query.uniqueResult();
            booking.setAdmin(admin);
        }

        //set customer id in booking details
        //query data of customers
        if(booking.getCustomer() != null){
            int customer_id = booking.getCustomer().getId();
            Query query = sessionFactory.getCurrentSession().createQuery("from Customer where id =:id");         //querying Business name from database
            query.setInteger("id",customer_id);
            Customer customer = (Customer) query.uniqueResult();
            booking.setCustomer(customer);
        }

        //Booking can add employee by employee's name
        if(booking.getEmployee() != null){
            String employee_name = booking.getEmployee().getName();
            Query query = sessionFactory.getCurrentSession().createQuery("from Employee where name =:name");
            query.setParameter("name",employee_name);
            Employee employee = (Employee) query.uniqueResult();
            booking.setEmployee(employee);                                                                          //set employee id
        }

        // Booking can add service by service's name
        if(booking.getService() != null){
            String service_name = booking.getService().getName();
            Query query = sessionFactory.getCurrentSession().createQuery("from Service where name =:name");
            query.setParameter("name",service_name);
            Service service = (Service) query.uniqueResult();
            booking.setService(service);
        }
        sessionFactory.getCurrentSession().saveOrUpdate(booking);
    }

    public void updateBooking(Booking booking){
        if(booking.getDate_booked() == null){
            Date date = new Date();
            SimpleDateFormat formatterDate = new SimpleDateFormat("dd-MM-yyyy");
            booking.setDate_booked(formatterDate.format(date));
        }
        sessionFactory.getCurrentSession().update(booking);
    }

    //query booking_id
    //then set booking status = true
    //means that booking is approved
    public void acceptStatusBooking(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id =:id");
        query.setInteger("id",id);
        Booking booking = (Booking) query.uniqueResult();
        booking.setStatus(true);
    }

    //the same pattern as accept service
    //status of booking set as false
    //booking is rejected
    public void rejectStatusBooking(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id =:id");
        query.setInteger("id",id);
        Booking booking = (Booking) query.uniqueResult();
        booking.setStatus(false);
    }

    // get booking by querying booking's ID
    public Booking getBooking (int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id =:id");
        query.setInteger("id",id);
        return (Booking) query.uniqueResult();
    }

    // get list of bookings
    public List<Booking> getAllBooking(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking");
        return query.list();
    }

    // get list of bookings by Admin ID
    public List<Booking> getBookingsByAdminId(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where admin_id =:id");
        query.setInteger("id",id);
        return query.list();
    }


    // delete booking by id
    public void deleteBooking(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Booking where id =:id");
        query.setInteger("id", id);
        Booking booking = (Booking) query.uniqueResult();
        if (booking.getAdmin()!=null){
            booking.setAdmin(null);
        }
        if (booking.getCustomer()!=null){
            booking.setCustomer(null);
        }
        if (booking.getService()!=null){
            booking.setService(null);
        }
        if (booking.getEmployee()!=null){
            booking.setEmployee(null);
        }
        sessionFactory.getCurrentSession().delete(booking);
    }
}
