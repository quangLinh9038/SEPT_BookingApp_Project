package controller;


import model.Admin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import service.AdminService;

import java.util.List;

@RestController
@CrossOrigin //enable CORS
@RequestMapping(path = "/")
public class AdminController {

    @Autowired
    private AdminService adminService;

    public AdminController(AdminService adminService) {
        this.adminService = adminService;
    }

    //get list of admin
    @RequestMapping(path = "admin", method = RequestMethod.GET)
    public List<Admin> getAllAdmin(){
        return adminService.getAllAdmin();
    }

    //add new admin path
    @RequestMapping(path = "admin", method =  RequestMethod.POST)
    public void addAdmin (@RequestBody Admin admin){
        System.out.println(admin);
        adminService.saveAdmin(admin);
    }

    //get admin by name path
    @RequestMapping(path = "admin/{name}", method = RequestMethod.GET)
    public void findAdmin(@PathVariable String name) {
        adminService.findAdmin(name);
    }

    //update path
    @RequestMapping(path = "admin", method = RequestMethod.PUT)
    public void updateAdmin(@RequestBody Admin admin){
        adminService.updateAdmin(admin);
    }

    //delete admin path
    @RequestMapping(path = "admin/{id}", method = RequestMethod.DELETE)
    public void deleteAdmin (@PathVariable int id){
        adminService.deleteAdmin(id);
    }
}