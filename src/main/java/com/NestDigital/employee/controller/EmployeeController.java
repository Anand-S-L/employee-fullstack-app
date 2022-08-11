package com.NestDigital.employee.controller;

import com.NestDigital.employee.model.EmployeeModel;
import com.NestDigital.employee.model.dao.EmployeeDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    EmployeeDao dao;

    @CrossOrigin(origins = "*")
    @PostMapping("/add")
    public  String addemployee(@RequestBody EmployeeModel employees){
        dao.save(employees);
        return "employees added successfully";
    }
    @CrossOrigin(origins = "*")
    @GetMapping("/viewemployees")
    public List<EmployeeModel> view(){

        return (List<EmployeeModel>) dao.findAll();
    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable int id){
        System.out.println(id);
        dao.deleteById(id);
        return "deleted successfully";
    }
}
