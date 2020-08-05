package service;

import model.Admin;
import model.Business;
import org.hibernate.Query;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;


@Transactional
@Service
public class BusinessService {

    @Autowired
    private SessionFactory sessionFactory;

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    //save(add) business
    public void saveBusiness (Business business){
//        if (business.getAdmin()!=null){
//            int id = business.getAdmin().getId();
//            Query query = sessionFactory.getCurrentSession().createQuery("from Admin where id = :id");
//            query.setInteger("id",id);
//            Admin admin = (Admin) query.uniqueResult();
//            admin.setBusiness(business);
//        }
        sessionFactory.getCurrentSession().save(business);
    }

    //get business
    public Business getBusiness (int id) {
        Query query = sessionFactory.getCurrentSession().createQuery("from Business where name=:name");
        query.setInteger("id",id);
        return (Business)query.uniqueResult();
    }

    //get list business
    public List<Business> getAllBusiness(){
        Query query = sessionFactory.getCurrentSession().createQuery("from Business");
        return query.list();
    }

    //find business by name
    public List<Business> findBusiness(String name){
        Query query = sessionFactory.getCurrentSession().createQuery("from Business where name like :name");
        query.setString("name", "%"+name+"%");
        return query.list();
    }

    //update busines
    public void updateBusiness(Business business){
        sessionFactory.getCurrentSession().update(business);
    }

    //delete business
    public void deleteBusiness(int id){
        Query query = sessionFactory.getCurrentSession().createQuery("from Student where id=:id");
        query.setInteger("id", id);
        Business business = (Business) query.uniqueResult();
        sessionFactory.getCurrentSession().delete(business);
    }
}
