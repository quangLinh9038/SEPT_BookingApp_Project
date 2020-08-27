package model;


import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Business")
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generate id incrementally
    @Column
    private int id;

    // generate unique name in Business table
    @Column(unique = true)
    private String name;

    @Column
    private String contact;

    @Column
    private String description;

    @Column
    private String schedule;

    //MAPPING
    //admin mapping
    @OneToOne
    @PrimaryKeyJoinColumn
    private Admin admin;

    //one-to-many relationship with service table
    // 1 business may have more than 1 service
    @OneToMany(mappedBy = "business", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Service> services = new ArrayList<>();

    // 1 business have more than employee
    @OneToMany(mappedBy = "business", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Employee> employees = new ArrayList<>();

    public Business() {
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

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getContact() {
        return contact;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public String getSchedule() {
        return schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public List<Service> getServices() {
        return services;
    }

    public void setServices(List<Service> services) {
        this.services = services;
    }

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }

    @Override
    public String toString() {
        return "Business{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", contact='" + contact + '\'' +
                ", description='" + description + '\'' +
                ", schedule='" + schedule + '\'' +
                ", admin=" + admin +
                ", services=" + services +
                ", employees=" + employees +
                '}';
    }
}
