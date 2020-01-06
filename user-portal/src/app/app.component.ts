import { Component, OnInit } from '@angular/core';
import {AppService} from './app.service';
import { Router } from '@angular/router';
import { Employee } from './Model/employee.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  empl : Employee[];
  editEmployee : boolean=false;
  constructor(private router:Router, private appService:AppService){

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
