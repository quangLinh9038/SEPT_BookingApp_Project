package model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Service")
public class Service {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private Timestamp duration;

    @Column
    private String description;

    @Column
    private int price;

    @OneToMany(mappedBy = "service", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<AssignService> assignService = new ArrayList<>();

    @ManyToOne
    private Business business;

    @OneToMany(mappedBy = "service",fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    public Service() {
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

    public Timestamp getDuration() {
        return duration;
    }

    public void setDuration(Timestamp duration) {
        this.duration = duration;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public List<AssignService> getAssignService() {
        return assignService;
    }

    public void setAssignService(List<AssignService> assignService) {
        this.assignService = assignService;
    }

    public Business getBusiness() {
        return business;
    }

    public void setBusiness(Business business) {
        this.business = business;
    }

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    @Override
    public String toString() {
        return "Service{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", duration=" + duration +
                ", description='" + description + '\'' +
                ", price=" + price +
                ", assignService=" + assignService +
                ", business=" + business +
                ", booking=" + bookings +
                '}';
    }
}
