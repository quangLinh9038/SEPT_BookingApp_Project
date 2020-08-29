package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Employee")
public class Employee extends User {

    @Column(unique = true)
    private String name;

    @Column
    private String schedule;

    @ManyToOne
    @JsonIgnore
    private Business business;

    //an employee can be an admin in the system
    @ManyToOne
    @JsonIgnore
    private Admin admin;

    //1 employee can be assigned for many bookings
    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<AssignService> assignServices = new ArrayList<>();

    public Employee() {
    }



    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public List<AssignService> getAssignServices() {
        return assignServices;
    }

    public void setAssignServices(List<AssignService> assignServices) {
        this.assignServices = assignServices;
    }

    @Override
    public String toString() {
        return "Employee{" +
                ", name='" + name + '\'' +
                ", schedule='" + schedule + '\'' +
                ", business=" + business +
                ", admin=" + admin +
                ", bookings=" + bookings +
                ", assignServices=" + assignServices +
                '}';
    }
}
