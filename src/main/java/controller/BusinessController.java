package controller;

import model.Business;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.BusinessService;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class BusinessController {

    @Autowired
    private BusinessService businessService;

    public BusinessController(BusinessService businessService) {
        this.businessService = businessService;
    }

    @RequestMapping(path = "business", method = RequestMethod.GET)
    public List<Business> getAllBusiness(){
        return businessService.getAllBusiness();
    }

    @RequestMapping(path = "business", method =  RequestMethod.POST)
    public void saveBusiness (@RequestBody Business business){
        businessService.saveBusiness(business);
    }

    @RequestMapping(path = "admin/{id}", method = RequestMethod.DELETE)
    public void deleteBusiness (@PathVariable int id){
        businessService.deleteBusiness(id);
    }
}