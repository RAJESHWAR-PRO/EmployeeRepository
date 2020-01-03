package HibernateEmp.HibernateEmp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins="*", maxAge = 3600)
@RestController
@RequestMapping(value = "/employee")
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@RequestMapping("/hello")
	String hello()
	{
		return "hello";
	}
	
	@PostMapping
	public Employee create(@RequestBody Employee empl) {
		return employeeService.create(empl);
	}
	
	@GetMapping(path= {"/{id}"})
	public Employee findOne(@PathVariable("id") Long id) {
		return employeeService.findById(id);
	}
	
	@PutMapping(path = {"/update/{id}"})
	public Employee update(@PathVariable("id") Long id, @RequestBody Employee empl){
		return employeeService.update(empl);
	}
	@DeleteMapping(path = {"/{id}"})
	public Employee delete(@PathVariable("id") Long id)
	{
		return employeeService.delete(id);
	}
	@GetMapping
	public List<Employee> findAll()
	{
		return employeeService.findAll();
	}
	

}
