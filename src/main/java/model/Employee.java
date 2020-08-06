package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.awt.print.Book;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String schedule;

    @ManyToOne
    @JsonIgnore
    private Business business;

    @ManyToOne
    @JsonIgnore
    private Admin admin;

    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    @OneToMany(mappedBy = "employee", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<AssignService> assignServices = new ArrayList<>();

    public Employee() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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
                "id=" + id +
                ", name='" + name + '\'' +
                ", schedule='" + schedule + '\'' +
                ", business=" + business +
                ", admin=" + admin +
                ", bookings=" + bookings +
                ", assignServices=" + assignServices +
                '}';
    }
}
