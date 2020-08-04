package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.awt.print.Book;

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

    @OneToMany(mappedBy = "Employee", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Booking booking;

    @OneToMany(mappedBy = "Employee", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private AssignService assignService;

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

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    public AssignService getAssignService() {
        return assignService;
    }

    public void setAssignService(AssignService assignService) {
        this.assignService = assignService;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", schedule='" + schedule + '\'' +
                ", business=" + business +
                ", admin=" + admin +
                ", booking=" + booking +
                ", assignService=" + assignService +
                '}';
    }
}
