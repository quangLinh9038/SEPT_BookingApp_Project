package service;



import model.Customer;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
@Transactional

public class CustomerService {
    private List<Customer> customerList = new ArrayList<>();


    @Autowired
    private SessionFactory sessionFactory;

    // get all customer
    public List<Customer> getAllCustomers(){
        Query query = sessionFactory.getCurrentSession().createQuery("From Customer");
        return query.list();
    }

    // add customer
    // and set role for customer
    // if customer's is null
    public void addCustomer(Customer customer){
        if (customer.getRole() == null) {
            customer.setRole("CUSTOMER");
        }
        sessionFactory.getCurrentSession().saveOrUpdate(customer);
    }

    // update customer
    public void updateCustomer(Customer customer){
        sessionFactory.getCurrentSession().update(customer);
    }

    // delete customer by id
    // following path: customer/{id}
    public void deleteCustomer(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Customer where id =:id");
        query.setInteger("id", id);
        Customer customer = (Customer) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(customer);
    }

    //check username of customer
    //querying username from Customer table
    public boolean checkUsername(Customer customer){
        String username = customer.getUsername();
        Query query = sessionFactory.getCurrentSession().createQuery("from Customer where username =:username");
        query.setString("username",username);
        Customer checkCustomerUsername = (Customer) query.uniqueResult();
        return checkCustomerUsername != null;
    }

    public boolean checkLogin(Customer customer){
        String username = customer.getUsername();
        String password = customer.getPassword();
        Query query = sessionFactory.getCurrentSession().createQuery("from Customer where username =:username and password =:password");
        query.setString("username",username).setString("password",password);
        Customer checkCustomerExist = (Customer) query.uniqueResult();
        return checkCustomerExist != null;
    }
}
