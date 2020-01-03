package HibernateEmp.HibernateEmp;

import java.util.List;

public interface EmployeeService {
	
	Employee create(Employee empl);
	Employee delete(Long id);
	List<Employee> findAll();
	Employee update(Employee empl);
	Employee findById(Long id);

}
