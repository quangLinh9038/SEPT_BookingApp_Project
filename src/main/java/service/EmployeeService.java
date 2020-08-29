package service;


import model.Admin;
import model.Customer;
import model.Employee;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class EmployeeService {

    @Autowired
    private SessionFactory sessionFactory;

    // get all employees
    public List<Employee> getAllEmployees(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Employee");
        return query.list();
    }

    // add employee
    public void addEmployee(Employee employee){
        if(employee.getRole() == null){
            employee.setRole("EMPLOYEE");
        }
        sessionFactory.getCurrentSession().saveOrUpdate(employee);
    }

    // update employee
    public void updateEmployee(Employee employee){
        sessionFactory.getCurrentSession().update(employee);
    }

    // delete employee
    public void deleteEmployee(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Employee where id =:id");
        query.setInteger("id", id);
        Employee employee = (Employee) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(employee);
    }


    //check username of employee
    public boolean checkUsername(Employee employee){
        String username = employee.getUsername();
        Query query = sessionFactory.getCurrentSession().createQuery("from Employee where username =:username");
        query.setString("username",username);
        Employee checkEmployeeUsername = (Employee) query.uniqueResult();
        if(checkEmployeeUsername != null){
            return true;
        }
        return false;
    }

    // check username and password
    // whether matching database
    public boolean checkLogin(Employee employee){
        String username = employee.getUsername();
        String password = employee.getPassword();
        Query query = sessionFactory.getCurrentSession().createQuery("from Employee where username =:username and password =:password");
        query.setString("username",username).setString("password",password);
        Employee checkEmployeeExist = (Employee) query.uniqueResult();
        return checkEmployeeExist != null;
    }
}
