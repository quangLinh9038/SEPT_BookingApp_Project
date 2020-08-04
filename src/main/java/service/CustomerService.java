package service;


import model.Customer;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CustomerService {

    @Autowired
    private SessionFactory sessionFactory;

    //CREATE
    public List<Customer> getAllCustomers(){
        Query query = sessionFactory.getCurrentSession().createQuery("From Customer");
        return query.list();
    }

    public void addCustomer(Customer customer){
        sessionFactory.getCurrentSession().save(customer);

    }

    public void updateCustomer(Customer customer){
        sessionFactory.getCurrentSession().update(customer);
    }

    public void deleteCustomer(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("From Customer where id = :id");
        query.setInteger("id", id);
        Customer customer = (Customer) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(customer);
    }


}
