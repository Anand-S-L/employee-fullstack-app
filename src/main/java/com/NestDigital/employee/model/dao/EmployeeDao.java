package com.NestDigital.employee.model.dao;

import org.springframework.data.repository.CrudRepository;
import com.NestDigital.employee.model.EmployeeModel;
public interface EmployeeDao extends CrudRepository<EmployeeModel,Integer> {
}
