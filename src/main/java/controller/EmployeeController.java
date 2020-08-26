package controller;


import com.google.gson.Gson;
import model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import service.EmployeeService;
import service.ServiceService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping(path = "/")
public class EmployeeController {

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Autowired
    private EmployeeService employeeService;


    @RequestMapping(path = "employees", method = RequestMethod.GET)
    public List<Employee> getAllEmployee(){
        return employeeService.getAllEmployees();
    }


    @RequestMapping(path = "post/employees", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> addEmployee(@RequestBody Employee employee){
        String result = "";
        Gson g = new Gson();
        HttpStatus httpStatus;
        try {
            if (!employeeService.checkUsername(employee)){
                result = "Create account successfully!";
                httpStatus = HttpStatus.OK;
                employeeService.addEmployee(employee);
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

    @RequestMapping(path = "login/employees", method = RequestMethod.POST)
    @ResponseBody
    public ResponseEntity<String> loginEmployee(@RequestBody Employee employee){
        String result = "";
        Gson g = new Gson();
        HttpStatus httpStatus;
        try {
            if (!employeeService.checkLogin(employee)){
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


    @RequestMapping(path = "employees", method = RequestMethod.PUT)
    public void updateEmployee(@RequestBody Employee employee){
        employeeService.updateEmployee(employee);
    }

    @RequestMapping(path = "employees/delete", method = RequestMethod.DELETE)
    public void deleteEmployee(@RequestParam int id){
        employeeService.deleteEmployee(id);
    }
}
