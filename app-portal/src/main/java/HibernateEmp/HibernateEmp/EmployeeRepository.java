package HibernateEmp.HibernateEmp;

import java.util.List;
import org.springframework.data.repository.Repository;



public interface EmployeeRepository extends Repository<Employee, Long> {
	
	void delete(Employee empl);
	Employee save(Employee empl);
	List<Employee> findAll();
	Employee findOne(Long id);
}
