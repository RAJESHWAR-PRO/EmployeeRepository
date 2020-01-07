import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './Update/addEmployee.component';
import { HomePageComponent } from './Homepage/homepage.component';
import { EmployeeService } from './Employee/employee.service';
import { MaterialModule } from './Model/materialModule';
import { MatSortModule } from '@angular/material/sort';
import { UpdateEmployee } from './Employee/updateEmployee.component';
import { EmployeeComponent } from './Employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    HomePageComponent,
    EmployeeComponent,
    UpdateEmployee
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    MatSortModule,
    BrowserAnimationsModule
  ],
  entryComponents: [UpdateEmployee],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }