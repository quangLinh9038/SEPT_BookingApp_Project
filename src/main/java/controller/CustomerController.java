package controller;


import com.google.gson.Gson;
import model.Customer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.CustomerService;

import java.util.List;

@RestController
@CrossOrigin

@RequestMapping(path = "/")
public class CustomerController {

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @Autowired
    private CustomerService customerService;

    @RequestMapping(path = "customers", method = RequestMethod.GET)
    public List<Customer> getAllCustomer(){
        return customerService.getAllCustomers();
    }

    @RequestMapping(path = "post/customers", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer){
        String result = "";
        Gson g = new Gson();
        HttpStatus httpStatus;
        try {
            //username available --> return OK status and save new username
            if (!customerService.checkUsername(customer) && !customerService.checkPassword(customer)){
                result = "Create account successfully!";
                httpStatus = HttpStatus.OK;
                customerService.addCustomer(customer);
            }
            else{
                result = "Username or password is invalid!";
                httpStatus = HttpStatus.BAD_REQUEST;
            }
            } catch (Exception ex){
            result = "Server error!";
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return  new ResponseEntity<>(g.toJson(result), httpStatus);
    }

    @RequestMapping(path = "login/customers", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addCustomer(@RequestBody Customer customer){
        String result = "";
        Gson g = new Gson();
        HttpStatus httpStatus;
        try {
            //username available --> return OK status and save new username
            if (!customerService.checkUsername(customer) && !customerService.checkPassword(customer)){
                result = "Login successfully!";
                httpStatus = HttpStatus.OK;
            }
            else{
                result = "Username or password is invalid!";
                httpStatus = HttpStatus.BAD_REQUEST;
            }
            } catch (Exception ex){
            result = "Server error!";
            httpStatus = HttpStatus.INTERNAL_SERVER_ERROR;
        }
        return  new ResponseEntity<>(g.toJson(result), httpStatus);
    }


    @RequestMapping(path = "customers", method = RequestMethod.PUT)
    public void updateCustomer(@RequestBody Customer customer){
        customerService.updateCustomer(customer);
    }

    @RequestMapping(path = "customers/delete", method = RequestMethod.DELETE)
    public void deleteCustomer(@RequestParam int id){
        customerService.deleteCustomer(id);
    }
}
