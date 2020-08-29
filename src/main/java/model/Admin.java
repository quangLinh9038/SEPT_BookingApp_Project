package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Admin")
public class Admin extends User {

    @Column
    private String name;

    //mapping one-to-many relationship to Booking table
    // ignore json
    @OneToMany(mappedBy = "admin", fetch = FetchType.EAGER)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    //business mapping
    @OneToOne(cascade = CascadeType.ALL)
    @JsonIgnore
    private Business business;

    //one-to-many relationship with Employees table
    @OneToMany(mappedBy = "admin", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Employee> employees = new ArrayList<>();

    public Admin() {
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    @Override
    public String toString() {
        return "Admin{" +
                ", name='" + name + '\'' +
                ", bookings=" + bookings +
                ", business=" + business +
                ", employees=" + employees +
                '}';
    }
}
