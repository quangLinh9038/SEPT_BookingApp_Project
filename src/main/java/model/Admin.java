package model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @OneToMany(mappedBy = "admin", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Booking> bookings = new ArrayList<>();

    @OneToOne
    private Business business;

    @OneToMany(mappedBy = "admin", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Employee> employees = new ArrayList<>();

    public Admin() {
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
                "id=" + id +
                ", name='" + name + '\'' +
                ", bookings=" + bookings +
                ", business=" + business +
                ", employees=" + employees +
                '}';
    }
}
