package model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Booking")
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private Date date_created;

    @Column
    private String description;

    @Column
    private boolean status;

    @ManyToOne
    @JsonIgnore
    private Admin admin;

    @ManyToOne
    @JsonIgnore
    private Customer customer;

    @OneToOne
    @MapsId
    private Service service;

    @ManyToOne
    @JsonIgnore
    private Employee employee;

    public Booking() {
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getDate_created() {
        return date_created;
    }

    public void setDate_created(Date date_created) {
        this.date_created = date_created;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isStatus() {
        return status;
    }

    public void setStatus(boolean status) {
        this.status = status;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }

    public Employee getEmployee() {
        return employee;
    }

    public void setEmployee(Employee employee) {
        this.employee = employee;
    }

    @Override
    public String toString() {
        return "Booking{" +
                "id=" + id +
                ", date_created=" + date_created +
                ", description='" + description + '\'' +
                ", status=" + status +
                ", admin=" + admin +
                ", customer=" + customer +
                '}';
    }
}
