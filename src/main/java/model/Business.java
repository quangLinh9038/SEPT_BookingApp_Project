package model;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "Business")
public class Business {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column
    private String name;

    @Column
    private String profile;

    @Column
    private String contact;

    @Column
    private String schedule;

    @OneToOne
    @MapsId
    private Admin admin;

    @OneToMany(mappedBy = "business", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Service> services = new ArrayList<>();

    @OneToMany(mappedBy = "business", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
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

    public String getProfile() {
        return profile;
    }

    public void setProfile(String profile) {
        this.profile = profile;
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
                ", profile='" + profile + '\'' +
                ", contact='" + contact + '\'' +
                ", schedule='" + schedule + '\'' +
                ", admin=" + admin +
                ", services=" + services +
                ", employees=" + employees +
                '}';
    }
}
