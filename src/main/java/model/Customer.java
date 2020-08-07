package model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name ="Customer")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String address;

    @Column
    private String contact;

    @Column
    private String email;

    @OneToMany(mappedBy = "customer", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Booking> bookings = new ArrayList<>();

    public Customer() {
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getEmail() {return email;}

    public void setEmail(String email) {this.email = email;}

    public List<Booking> getBookings() {
        return bookings;
    }

    public void setBookings(List<Booking> bookings) {
        this.bookings = bookings;
    }

    @Override
    public String toString() {
        return "Customer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", contact='" + contact + '\'' +
                ", email='" + email + '\'' +
                ", bookings=" + bookings +
                '}';
    }
}
