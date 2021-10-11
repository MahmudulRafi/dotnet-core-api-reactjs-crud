﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIApplication.Model;
using APIApplication.Services;

namespace APIApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeesController : ControllerBase
    {
       // private readonly DataContext _context;
        private readonly IEmployeeService _employeeService;

        public EmployeesController(IEmployeeService employeeService)
        {
           // _context = context;
            _employeeService = employeeService;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Employee>> GetEmployees()
        {
            return _employeeService.GetEmployeesList();
        }

        [HttpGet("{id}")]
        public ActionResult<Employee> GetEmployee(int id)
        {
            var employee = _employeeService.GetById(id);

            if (employee == null)
            {
                return NotFound();
            }

            return employee;
        }

        [HttpPut("{id}")]
        public IActionResult PutEmployee(int id, Employee employee)
        {
            if (id != employee.EmployeeID)
            {
                return BadRequest();
            }
            _employeeService.StateModified(employee);
            try
            {
                _employeeService.SaveChange();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmployeeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public ActionResult<Employee> PostEmployee(Employee employee)
        {
            _employeeService.Insert(employee);
            _employeeService.SaveChange();

            return CreatedAtAction("GetEmployee", new { id = employee.EmployeeID }, employee);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(int id)
        {
            Employee employee = _employeeService.GetById(id);
            if (employee == null)
            {
                return NotFound();
            }

            _employeeService.Delete(id);
            _employeeService.SaveChange();

            return NoContent();
        }

        private bool EmployeeExists(int id)
        {
            return _employeeService.EmployeeExists(id);
        }
    }
}
