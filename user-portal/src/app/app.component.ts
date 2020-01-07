import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from './Model/employee.model';
import { EmployeeService } from './Employee/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit{
  empl : Employee[];
  editEmployee : boolean=false;
  constructor(private router:Router, private appService:EmployeeService){

  }
  ngOnInit(): void {
    this.appService.getEmployees()
    .subscribe(data => {
      this.empl = data;
    })
  }
  edit(employee):void{
    this.editEmployee = true;
  }
  title = 'angular';
}
