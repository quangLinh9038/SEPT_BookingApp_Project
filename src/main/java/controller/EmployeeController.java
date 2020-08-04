package controller;


import model.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.EmployeeService;
import service.ServiceService;

import java.util.List;

@RestController
@RequestMapping(path = "/")
public class EmployeeController {

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(path = "employees", method = RequestMethod.GET)
    public List<Employee> getAllServices(){
        return employeeService.getAllEmployees();
    }

    @RequestMapping(path = "employees", method = RequestMethod.POST)
    public void addService(@RequestBody Employee employee){
        employeeService.addEmployee(employee);
    }

    @RequestMapping(path = "employees", method = RequestMethod.PUT)
    public void updateCustomer(@RequestBody Employee employee){
        employeeService.updateEmployee(employee);
    }

    @RequestMapping(path = "employees/delete", method = RequestMethod.DELETE)
    public void deleteCustomer(@RequestParam int id){
        employeeService.deleteEmployee(id);
    }
}
