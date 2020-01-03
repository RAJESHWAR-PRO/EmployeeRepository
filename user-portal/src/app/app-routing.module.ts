import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './Update/addEmployee.component';
import { HomePageComponent } from './Homepage/homepage.component';
import { EmployeeComponent } from './Employee/employee.component';

const routes: Routes = [
  {path : '',pathMatch:'full', component : HomePageComponent},
  {path : 'employeeList', component : EmployeeComponent},
  {path : 'add', component : AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
