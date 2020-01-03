package HibernateEmp.HibernateEmp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Service
@Component("empResBean")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public Employee create(Employee empl) {
		// TODO Auto-generated method stub
		return employeeRepository.save(empl);
	}

	@Override
	public Employee delete(Long id) {
		// TODO Auto-generated method stub
		Employee empl = findById(id);
		if(empl != null)
		{
			employeeRepository.delete(empl);
		}
		return empl;
	}

	@Override
	public List<Employee> findAll() {
		// TODO Auto-generated method stub
		return employeeRepository.findAll();
	}

	@Override
	public Employee update(Employee empl) {
		// TODO Auto-generated method stub
		return employeeRepository.save(empl);
	}

	@Override
	public Employee findById(Long id) {
		// TODO Auto-generated method stub
		return employeeRepository.findOne(id);
	}

}
