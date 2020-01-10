import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './homepage.component';
import { assertPlatform } from '@angular/core';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Model/materialModule';
import { FormsModule } from '@angular/forms';
import { MatSortModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from '../Employee/employee.component';
import { AppComponent } from '../app.component';
import { AddEmployeeComponent } from '../Update/addEmployee.component';
import { EmployeeService } from '../Employee/employee.service';

describe('HomeComponent', () => {
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
        const fixture = TestBed.createComponent(HomePageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should display registration form after clicking first tab', async(() => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const compiled = fixture.nativeElement;
        compiled.querySelectorAll('mat-tab')[1];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(compiled.querySelector('add-employee')).toBeTruthy();
        });
    }));
    it('should display employee list after clicking second tab', async(() => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const compiled = fixture.nativeElement;
        compiled.querySelectorAll('mat-tab')[1];
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          expect(compiled.querySelector('employee-root')).toBeNull();
        });
    }));
});
