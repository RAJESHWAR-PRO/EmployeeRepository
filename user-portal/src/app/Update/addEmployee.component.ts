import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Model/employee.model';
import { EmployeeService } from '../Employee/employee.service';
import { style } from '@angular/animations';
import { MatSnackBar } from '@angular/material';

@Component({
  selector : 'add-employee',
  templateUrl: './addEmployee.component.html',
  styleUrls: ['./addEmployee.component.css']
})

export class AddEmployeeComponent implements OnInit{

  empName: string;
  empAddress: string;
  maritalStatus: string;
  empSalary: number;
  confirmation: boolean = false;

  empl : Employee = new Employee();
  constructor(private router:Router, private emplService:EmployeeService,private snackBar:MatSnackBar){

  }
  ngOnInit(): void {
    this.empName= null;
    this.empAddress= null;
    this.empSalary = null;
    this.maritalStatus= null;
  }
  createEmployee():void{
    if(this.empl.empName==null)
    {
      this.snackBar.open("Please enter the Name");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 2000);
    }
    else if(this.empl.empAddress==null)
    {
      this.snackBar.open("Please enter the Address");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 2000);
    }
    else if(this.empl.empSalary==null)
    {
      this.snackBar.open("Please enter the Salary");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 2000);
    }
    else if(this.empl.maritalStatus==null)
    {
      this.snackBar.open("Please select the maritalStatus");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 2000);
    }
    else{
    this.confirmation = confirm("Do you want to create the Data?")
    if(this.confirmation == true)
    {
      this.emplService.createEmployee(this.empl)
      .subscribe(data =>{
        this.snackBar.open("Data created successfully!!!")
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 3000);
        this.ngOnInit();
      })
    }
    else{
      this.snackBar.open("Data not created!!!");
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 3000);
    }
  }
    
  }
}