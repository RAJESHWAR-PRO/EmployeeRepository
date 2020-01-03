package HibernateEmp.HibernateEmp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
//@ComponentScan("HibernateEmp.HibernateEmp.EmployeeController")
//@ComponentScan({"HibernateEmp.HibernateEmp.EmployeeController","HibernateEmp.HibernateEmp.EmployeeRepository",
//	"HibernateEmp.HibernateEmp.Employee","HibernateEmp.HibernateEmp.EmployeeService",
//	"HibernateEmp.HibernateEmp.EmployeeServiceimpl"})
public class EmployeeMain {

	public static void main(String[] args) {
		SpringApplication.run(EmployeeMain.class, args);
	}

}