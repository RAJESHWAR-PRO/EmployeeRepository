import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';
import { Employee } from '../Model/employee.model';
import { EmployeeService } from '../Employee/employee.service';

@Component({
  selector: 'home-root',
  templateUrl: './homepage.component.html'
  // styleUrls: ['./app.component.css']
})

export class HomePageComponent implements OnInit{
  empl : Employee[];
  editEmployee : boolean=false;
  listEmployee : boolean=true;
  createEmployee : boolean = true;
  constructor(private router:Router, private EmpService:EmployeeService){

  }
  ngOnInit(): void {
  }
  empList():void{
    this.listEmployee = true;
    this.createEmployee = false;
  }
  createEmp():void{
    this.listEmployee = false;
    this.createEmployee = true;
  }
  title = 'angular';
}
