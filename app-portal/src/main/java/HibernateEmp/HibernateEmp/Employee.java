package HibernateEmp.HibernateEmp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "employee", uniqueConstraints = {
		@UniqueConstraint(columnNames = "id")
})
public class Employee extends AuditModel {
	
	private static final long serialVersionUID = 1L;

	public Employee() {
		// TODO Auto-generated constructor stub
	}
	
	@Id
	@GeneratedValue
	@Column(name="id", unique = true, nullable = false)
	private Long id;

	@Column(name="EmpName", nullable = false)
	private String empName;

	@Column(name="EmpAddress", nullable = false)
	private String empAddress;

	@Column(name="EmpSalary", nullable = false)
	private Long empSalary;

	@Column(name="MaritalStatus", nullable = false)
	private String maritalStatus;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	
	public String getEmpName() {
		return empName;
	}
	public void setEmpName(String empName) {
		this.empName = empName;
	}
	
	public String getEmpAddress() {
		return empAddress;
	}
	public void setEmpAddress(String empAddress) {
		this.empAddress = empAddress;
	}
	
	public Long getEmpSalary() {
		return empSalary;
	}
	public void setEmpSalary(Long empSalary) {
		this.empSalary = empSalary;
	}
	
	public String getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

}
