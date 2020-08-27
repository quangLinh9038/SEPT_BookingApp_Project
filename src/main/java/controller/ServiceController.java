package controller;


import model.Customer;
import model.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.ServiceService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class ServiceController {

    public ServiceController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @Autowired
    private ServiceService serviceService;

    @RequestMapping(path = "services", method = RequestMethod.GET)
    public List<Service> getAllServices(){
        return serviceService.getAllServices();
    }

    @RequestMapping(path = "services", method = RequestMethod.POST)
    public void addService(@RequestBody Service service){
        serviceService.addService(service);
    }

    @RequestMapping(path = "services", method = RequestMethod.PUT)
    public void updateService(@RequestBody Service service){
        serviceService.updateService(service);
    }

    @RequestMapping(path = "services/delete/{id}", method = RequestMethod.DELETE)
    public void deleteService(@PathVariable int id){
        serviceService.deleteService(id);
    }
}
