import { HttpTestingController, HttpClientTestingModule } from "@angular/common/http/testing";
import { EmployeeComponent } from '../Employee/employee.component';
import { EmployeeService } from '../Employee/employee.service';
import { TestBed, fakeAsync, ComponentFixture, tick, flush, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Model/materialModule';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from '../app.component';
import { HomePageComponent } from '../Homepage/homepage.component';
import { AddEmployeeComponent } from './addEmployee.component';
import { OverlayContainer } from '@angular/cdk/overlay';

describe('AddEmployeeComponent', () => {
    let httpMock: HttpTestingController;
    let empService: EmployeeService;
    let empComponent: EmployeeComponent;
    beforeEach( async() => {
      TestBed.configureTestingModule({
        imports: [
          ReactiveFormsModule,
          RouterTestingModule,
          HttpClientTestingModule,
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          MaterialModule,
          FormsModule,
          BrowserAnimationsModule
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
    it('should create app', () =>{
        const fixture = TestBed.createComponent(AddEmployeeComponent);
        const app = fixture.debugElement.componentInstance;
        // expect(app).toBeTruthy();
    })
    it('checking the input values', fakeAsync(() => {
        const eName = 'Rajeshwar';
        const eAddr = 'Hyderabad';
        const eSalr = 900000;
        const eMart = 'No';
        let fixture :ComponentFixture<AddEmployeeComponent>;
        fixture = TestBed.createComponent(AddEmployeeComponent);
        let component = fixture.componentInstance;
        const debugElement = fixture.debugElement;
        const eNameField = debugElement.query(By.css('input[name=empName]')).nativeElement;
        const eAddrField = debugElement.query(By.css('input[name=empAddress]')).nativeElement;
        const eSalrField = debugElement.query(By.css('input[name=empSalary]')).nativeElement;
        
        // const eMaritalField = debugElement.query(By.css('mat-select')).nativeElement;
        // expect(eMaritalField.checking).toBe(2);
        eNameField.focus();
        eAddrField.focus();
        eSalrField.focus();
        // eMaritalField.focus();
        eNameField.value = eName;
        eAddrField.value = eAddr;
        eSalrField.value = eSalr;
        // eMaritalField.value = eMart;
        // eNameField.dispatchEvent(new Event(eName));
        // eAddrField.dispatchEvent(new Event(eAddr));
        // eSalrField.dispatchEvent(new Event(''+eSalr));
        tick();
        fixture.detectChanges();
        expect(component.empName).toBeNull();
        expect(component.empAddress).toBeNull();
        expect(component.empSalary).toBeNull();
        // expect(component.maritalStatus).toBeNull();
    }));
    it('check the drop down', async () => {
        const fixture = TestBed.createComponent(AddEmployeeComponent);
        const component = fixture.componentInstance;
        const debugElement = fixture.debugElement;
        const matSelect = debugElement.query(By.css('.mat-select-trigger')).nativeElement;
        // expect(matSelect.length).toEqual(2);
        matSelect.click();
        fixture.detectChanges();
        fixture.whenStable().then( () => {
        const matOption: HTMLElement = debugElement.query(By.css('.mat-select-value')).nativeElement;
        matOption.click();
        fixture.detectChanges();
        fixture.whenStable().then( () => {
          const inputElement: HTMLElement = debugElement.query(By.css('.mat-select-value-text')).nativeElement;
          // fixture.detectChanges();
          expect(inputElement.innerHTML).toContain("YES");
          expect(inputElement.innerHTML).toContain("NO");
          inputElement.click();
          // expect(inputElement).toBeTruthy();
          // console.log(inputElement.innerHTML);
          fixture.detectChanges();
        });
      });
        
    });
});