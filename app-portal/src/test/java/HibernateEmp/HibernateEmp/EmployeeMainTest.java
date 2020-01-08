package HibernateEmp.HibernateEmp;

import static org.junit.jupiter.api.Assertions.assertEquals;

import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;
import com.fasterxml.jackson.databind.ObjectMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeMainTest {

	private MockMvc mockMvc;

	@Autowired
	private WebApplicationContext context;
	@Autowired
	private EmployeeServiceImpl employeeService;
	@MockBean
	private EmployeeRepository employeeRepository;

	ObjectMapper om = new ObjectMapper();

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(context).build();
	}

	@Test
	public void testFindAll() throws Exception {
		Employee emp = new Employee(1L, "Rajesh", "Hyderabad", 890000L, "NO");
		Mockito.when(employeeRepository.findAll()).thenReturn(
				Stream.of(emp, new Employee(2L, "Tharun", "Hyderabad", 890000L, "NO")).collect(Collectors.toList()));
		String jsonRequest = om.writeValueAsString(emp);
		MvcResult mvcResult = mockMvc
				.perform(MockMvcRequestBuilders.get("/employee").content(jsonRequest).accept(MediaType.APPLICATION_JSON))
				.andReturn();
		System.out.println(mvcResult.getResponse());
		assertEquals(2, employeeService.findAll().size());
	}

	@Test
	public void testCreate() throws Exception {
		Employee emp = new Employee(1L, "Rajeshwar", "Hyderabad", 890000L, "NO");
		Mockito.when(employeeRepository.save(emp)).thenReturn(emp);
		String jsonRequest = om.writeValueAsString(emp);
		MvcResult mvcResult = mockMvc
				.perform(MockMvcRequestBuilders.post("/employee").content(jsonRequest).accept(MediaType.APPLICATION_JSON))
				.andReturn();
		System.out.println(mvcResult.getResponse());
		assertEquals(emp, employeeService.create(emp));
	}

	@Test
	public void testFindById() throws Exception {
		Long id = 1L;
		Employee emp = new Employee(1L, "Rajeshwar", "Hyderabad", 890000L, "NO");
		Mockito.when(employeeService.findById(id)).thenReturn(emp);
		String jsonRequest = om.writeValueAsString(emp);
		MvcResult mvcResult = mockMvc
				.perform(MockMvcRequestBuilders.get("/employee/{id}",id).content(jsonRequest).accept(MediaType.APPLICATION_JSON))
				.andReturn();
		System.out.println(mvcResult.getResponse());
		Mockito.verify(employeeRepository).findOne(id);
	}

	@Test
	public void testUpdate() throws Exception {
		Long id = 1L;
		Employee emp = new Employee(1L, "Rajeshwar", "Hyderabad", 890000L, "NO");
		Mockito.when(employeeService.update(emp)).thenReturn(emp);
		String jsonRequest = om.writeValueAsString(emp);
		MvcResult mvcResult = mockMvc
				.perform(MockMvcRequestBuilders.put("/employee/update/{id}", id).content(jsonRequest).accept(MediaType.APPLICATION_JSON))
				.andReturn();
		System.out.println(mvcResult.getResponse());
		assertEquals(emp, employeeRepository.save(emp));
	}

	@Test
	public void testDelete() throws Exception {
		Long id = 1L;
		Employee emp1 = new Employee(id, "Rajeshwar", "Hyderabad", 890000L, "NO");
		Mockito.when(employeeService.delete(id)).thenReturn(emp1);
		String jsonResult = om.writeValueAsString(emp1);
		MvcResult mvcResult = mockMvc
				.perform(MockMvcRequestBuilders.delete("/employee/{id}", id).content(jsonResult).accept(MediaType.APPLICATION_JSON))
				.andReturn();
		System.out.println(mvcResult.getResponse());
		Employee emp2 = employeeRepository.findOne(id);
		Mockito.verify(employeeRepository).delete(emp2);
	}

}
