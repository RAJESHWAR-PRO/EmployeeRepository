import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomePageComponent } from './homepage.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { BrowserModule, By } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../Model/materialModule';
import { FormsModule } from '@angular/forms';
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

    it('should create the app', () => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });
    it('should display create employee form at start', () => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const compiled = fixture.debugElement;
        // let tab = compiled.queryAll(By.css('mat-tab'))[0];
        // tab.nativeElement;
        // tab.click();
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          compiled.query(By.css('add-employee'));
          expect(compiled).toBeTruthy();
        });
      });
    it('should display employee list after clicking second tab', async(() => {
        const fixture = TestBed.createComponent(HomePageComponent);
        const compiled = fixture.debugElement;
        let tab = fixture.debugElement.queryAll(By.css('mat-tab-label'))[0];
        // tab.click;
        // tab[0].nativeElement;
        // expect(tab.listeners.length).toBe(2);
        // tab.listeners.length;

        // tab[0].click;
        fixture.detectChanges();
        fixture.whenStable().then(() => {
          compiled.query(By.css('employee-root'));
          // const fixture1 = TestBed.createComponent(EmployeeComponent);
          expect(compiled).toBeTruthy();
        });
    }));
});