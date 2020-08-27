package service;


import model.Business;
import model.Service;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;

import javax.transaction.Transactional;
import java.util.List;

@org.springframework.stereotype.Service
@Transactional
public class ServiceService {

    @Autowired
    private SessionFactory sessionFactory;

    // get all service
    public List<Service> getAllServices(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Service");
        return query.list();
    }

    // add service
    public void addService(Service service){
        if(service.getBusiness() != null){
            String business_name = service.getBusiness().getName();
            Query query = sessionFactory.getCurrentSession().createQuery("from Business where name =:name");
            query.setString("name",business_name);
            Business business = (Business) query.uniqueResult();
            service.setBusiness(business);
        }
        sessionFactory.getCurrentSession().save(service);

    }

    // update service
    public void updateService(Service service){
        sessionFactory.getCurrentSession().update(service);
    }

    // delete service
    public void deleteService(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Service where id =:id");
        query.setInteger("id", id);
        Service service = (Service) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(service);
    }


}
