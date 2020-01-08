package HibernateEmp.HibernateEmp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public Employee create(Employee empl) {
		return employeeRepository.save(empl);
	}

	public Employee delete(Long id) {
		Employee empl = findById(id);
		if (empl != null) {
			employeeRepository.delete(empl);
		} else {
			System.out.println("Employee not found");
		}
		return empl;
	}

	public List<Employee> findAll() {
		return employeeRepository.findAll();
	}

	public Employee update(Employee empl) {
		return employeeRepository.save(empl);
	}

	public Employee findById(Long id) {
		return employeeRepository.findOne(id);
	}

}
