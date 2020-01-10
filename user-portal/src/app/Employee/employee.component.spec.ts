import { TestBed, async, getTestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeComponent } from './employee.component';
import { MaterialModule } from '../Model/materialModule';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSortModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from '../Homepage/homepage.component';
import { AppComponent } from '../app.component';
import { AddEmployeeComponent } from '../Update/addEmployee.component';
import { EmployeeService } from './employee.service';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import { Employee } from '../Model/employee.model';
import { DebugElement } from '@angular/core';

describe('EmployeeComponent', () => {
  let httpMock: HttpTestingController;
  let empService: EmployeeService;
  let empComponent: EmployeeComponent;
  // let fixture: ComponentFixture<EmployeeComponent>;

//   let fixture: ComponentFixture<EmployeeComponent>;
//   let debugElement: DebugElement;
//   let htmlElement: HTMLElement;
  beforeEach( async() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        MatSortModule,
        BrowserAnimationsModule,
        MatPaginatorModule
      ],
      declarations: [
        AppComponent,
        HomePageComponent,
        EmployeeComponent,               
        AddEmployeeComponent
      ],
      providers:[EmployeeService],
    }).compileComponents();
  });

 
  

  it('should create the app', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('check the length of drop down', () => {
    const fixture = TestBed.createComponent(EmployeeComponent);
    const debugElement = fixture.debugElement;
    const matSelect = fixture.debugElement.query(By.css('mat-select')).nativeElement;
    expect(matSelect.childNodes.length).toBe(2);
    matSelect.click();
    fixture.detectChanges();
    // const matOption = fixture.debugElement.queryAll(By.css('mat-option'));
    // console.log(matOption);
    // matOption[0].nativeElement.click();
    // fixture.detectChanges();
    // fixture.whenStable().then( () => {
    //   const inputElement: HTMLElement = debugElement.query(By.css('ask-input')).nativeElement;
    //   expect(inputElement.innerHTML.length).toBeGreaterThan(0);
    // });
  });
  // it('Selector should have the following', async() =>{
  //   const fixture = TestBed.createComponent(EmployeeComponent);
  //   fixture.detectChanges();
  //   // const app = fixture.debugElement.nativeElement;
  //   // //   expect(app).toBeTruthy();
  //   // let htmlElement = fixture.debugElement.query(By.css('mat-select')).nativeElement;
  //   // expect(htmlElement.childNodes.length).toEqual(2);
    
    
  //   // htmlElement = fixture.debugElement.queryAll(By.css('mat-option-text'));
  //   // expect(htmlElement.childNodes[0]).toContain('search by id');
  //   const trigger = fixture.debugElement.query(By.css('.mat-select-trigger')).nativeElement;
  //   trigger.click();
  //   fixture.detectChanges();
  //   await fixture.whenStable().then(() => {
  //       const inquiryOptions = fixture.debugElement.queryAll(By.css('mat-option'));
  //       expect(inquiryOptions.length).toEqual(3);
  //   });
  // })

  it('should test the table ', (done) => {
    let dummyEmployees: Employee[] = [
      {
        id:1, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019,1,1,0,0,0), 
        updatedAt:new Date(2020,1,1,1,1,1)
      },
      {
        id:2, 
        empName:'Rajeshwar', 
        empAddress:'Hyderabad', 
        empSalary:890000, 
        maritalStatus:'NO', 
        createdAt: new Date(2019,1,1,0,0,0), 
        updatedAt:new Date(2020,1,1,1,1,1)
      },
    ]
    let fixture = TestBed.createComponent(EmployeeComponent);
    let component = fixture.componentInstance;
    fixture.detectChanges();
    expect(component.empl).toEqual(dummyEmployees);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.detectChanges();
  
      let tableRows = fixture.nativeElement.queryAll('tr');
      expect(tableRows.length).toBe(7);
  
      // Header row
      let headerRow = tableRows[0];
      expect(headerRow.cells[0].innerHTML).toBe('CreatedAt');
      expect(headerRow.cells[1].innerHTML).toBe('UpdatedAt');
      expect(headerRow.cells[2].innerHTML).toBe('Id');
      expect(headerRow.cells[3].innerHTML).toBe('Name');
      expect(headerRow.cells[4].innerHTML).toBe('Address');
      expect(headerRow.cells[5].innerHTML).toBe('Salary');
      expect(headerRow.cells[6].innerHTML).toBe('MaritalStatus');
  
      // Data rows
      let row1 = tableRows[1];
      expect(row1.cells[0].innerHTML).toBe(new Date(2019,1,1,0,0,0));
      expect(row1.cells[1].innerHTML).toBe(new Date(2020,1,2,1,1,1));
      expect(row1.cells[2].innerHTML).toBe(1);
      expect(row1.cells[3].innerHTML).toBe('Rajeshwar');
      expect(row1.cells[4].innerHTML).toBe('Hyderabad');
      expect(row1.cells[5].innerHTML).toBe(890000);
      expect(row1.cells[6].innerHTML).toBe('NO');
      let row2 = tableRows[2];
      expect(row2.cells[0].innerHTML).toBe(new Date(2019,1,1,0,0,0));
      expect(row2.cells[1].innerHTML).toBe(new Date(2020,1,2,1,1,1));
      expect(row2.cells[2].innerHTML).toBe(2);
      expect(row2.cells[3].innerHTML).toBe('Rajeshwar');
      expect(row2.cells[4].innerHTML).toBe('Hyderabad');
      expect(row2.cells[5].innerHTML).toBe(890000);
      expect(row2.cells[6].innerHTML).toBe('NO');
    });
    done();
  });
 
});