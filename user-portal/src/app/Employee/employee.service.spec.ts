import { TestBed, async, getTestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeComponent } from './employee.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { EmployeeService } from './employee.service';
import { Employee } from '../Model/employee.model';
// import { AppComponent } from './app.component';

describe('EmployeeComponent', () => {
  let httpMock: HttpTestingController;
  let empService: EmployeeService;
  let dummyEmployees1: Employee;
  beforeEach( () => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule,RouterTestingModule],
      providers:[EmployeeService],
    });
    httpMock = getTestBed().get(HttpTestingController);
    empService = getTestBed().get(EmployeeService);
  });
  it('it is created', ()=>{
    expect(empService).toBeTruthy();
  });

  it('it should get all the employees',()=>{
    let dummyEmployees: Employee[] = [
      {
        id:1, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019/1/1), 
        updatedAt:new Date(2020/1/2)
      },
      {
        id:2, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019/1/1), 
        updatedAt:new Date(2020/1/3)
      }
    ]

    empService.getEmployees().subscribe(data => {
      expect(data.length).toEqual(2);
      expect(data).toEqual(dummyEmployees);
    })

    let httpRequest = httpMock.expectOne(empService.emplUrl);
    expect(httpRequest.request.method).toBe("GET");
    httpRequest.flush(dummyEmployees);
  });

  it('it should find the employee by id',()=>{
    let dummyEmployees: Employee[] = [
      {
        id:1, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019/1/1), 
        updatedAt:new Date(2020/1/2)
      }
    ]

    empService.findById(dummyEmployees[0].id).subscribe(data => {
      expect(data).toBeTruthy();
      // expect(data).toEqual(dummyEmployees);
    })

    let httpRequest = httpMock.expectOne(empService.emplUrl+"/"+dummyEmployees[0].id);
    expect(httpRequest.request.method).toBe("GET");
    httpRequest.flush(dummyEmployees);
  });

  it('it should create the employee',()=>{
    let dummyEmployees: Employee[] = [
      {
        id:1, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019/1/1), 
        updatedAt:new Date(2020/1/2)
      }
    ]

    empService.createEmployee(dummyEmployees).subscribe(data => {
      expect(data).toBeTruthy();
      // expect(data).toEqual(dummyEmployees);
    })

    let httpRequest = httpMock.expectOne(empService.emplUrl);
    expect(httpRequest.request.method).toBe("POST");
    httpRequest.flush(dummyEmployees);
  });

  // it('it should update the employee',()=>{
  //   let dummyEmployees: Employee[] = [
  //     {
  //       id:1, 
  //       empName:'Rajeshwar', 
  //       empAddress:'Hyderabad', 
  //       empSalary:890000, 
  //       maritalStatus:'NO', 
  //       createdAt: new Date(2019/1/1), 
  //       updatedAt:new Date(2020/1/2)
  //     }
  //   ]

  //   empService.updateEmployee(dummyEmployees).subscribe(data => {
  //     expect(data.length).toBe(1);
  //     // expect(data).toEqual(dummyEmployees);
  //   })

  //   let httpRequest = httpMock.expectOne(empService.emplUrl+"/update/"+1);
  //   expect(httpRequest.request.method).toBe("PUT");
  //   httpRequest.flush(dummyEmployees);
  // });
  // it('it should Delete the employee',()=>{
  //   let dummyEmployees: Employee[] = [
  //     {
  //       id:1, 
  //       empName:'Rajeshwar', 
  //       empAddress:'Hyderabad', 
  //       empSalary:890000, 
  //       maritalStatus:'NO', 
  //       createdAt: new Date(2019/1/1), 
  //       updatedAt:new Date(2020/1/2)
  //     }
  //   ]
  //   empService.deleteEmployee(dummyEmployees).subscribe(data => {
  //     expect(data).toBeTruthy();
  //   })
  //   let httpRequest = httpMock.expectOne(empService.emplUrl+"/"+dummyEmployees[0].id);
  //   expect(httpRequest.request.method).toBe("DELETE");
  //   httpRequest[0].flush(dummyEmployees);
  //   httpMock.verify();
  // });
  

});
