import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Model/employee.model';
import { EmployeeService } from './employee.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { UpdateEmployee } from './updateEmployee.component';
import { CustomPaginator } from './CustomPaginatorConfiguration';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'employee-root',
  templateUrl: './employee.component.html',
  providers: [
    { provide: MatPaginatorIntl, useValue: CustomPaginator() } 
  ]
})

export class EmployeeComponent implements OnInit{
  empl : Employee[];
  updateEmpl : Employee = new Employee();
  editEmployee : boolean=false;
  confirmation : boolean = false;
  sortedData : Employee[];
  empl1: Employee = new Employee();
  type: string = null;
  displayedColumns: string[] = ['id','createdAt','updatedAt', 'empName', 'empAddress', 'empSalary','maritalStatus','Edit','Delete'];
  dataSource = new MatTableDataSource<Employee>();
  data : Employee[];
  pageNo:number;
  result : Employee = new Employee();
  selected: string = "by Id";
  jumpToPageNumber: number = 1;
  jumpToMaxPageNumber: number=1;
  rowSize: number = 5;
  maxPageSize: number=1;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort,{static:true}) sort1:MatSort;

  ngOnInit(): void {
    this.emplService.getEmployees()
    .subscribe(data => {
      this.empl = data;
      if(this.empl)
      {
      this.dataSource = new MatTableDataSource<Employee>(this.empl);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort1;
      }
      else
      {
        alert("Data not found");
      }
    })
  }
  pageSize(pageSize:number){
    this.paginator.pageSize = pageSize;
    this.maxPageSize = this.paginator.length;
    this.jumpToPage(1);
    this.paginator.page.next({      
      pageIndex: this.paginator.pageIndex,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
      });
      this.jumpToPageNumber = 1;
  }
  jumpToPage(pageNumber:number){
    const size = Math.ceil((this.paginator.length)/(this.paginator.pageSize));
    this.jumpToMaxPageNumber = size;
    if((pageNumber<=size)&&(pageNumber>0))
    {
      this.paginator.pageIndex = pageNumber-1;
      this.paginator.page.next({      
      pageIndex: pageNumber+1,
      pageSize: this.paginator.pageSize,
      length: this.paginator.length
      });
      pageNumber=0;
    }
    else if(pageNumber == 0){}
    else{
      this.snackBar.open("Enter a valid page number from 1 to "+Math.ceil((this.paginator.length)/(this.paginator.pageSize)));
      setTimeout(() => {
        this.snackBar.dismiss();
      }, 3000);
      pageNumber=0;
    }
  }
  applyFilter(filterValue: string) {
    if(this.type == "by Name")
    {
      this.dataSource.filterPredicate = (data: Employee, filter: string) =>
      data.empName.trim().toLowerCase().indexOf(filter) != -1;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    else if(this.type == "by Address")
    {
      this.dataSource.filterPredicate = (data: Employee, filter: string) =>
      data.empAddress.trim().toLowerCase().indexOf(filter) != -1;
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    else if(this.type == "by Id")
    {
      this.dataSource.filterPredicate = (data: Employee, filter: string) =>
       data.id.toString().trim().toLowerCase().indexOf(filter) != -1;
       this.dataSource.filter = filterValue;
    }
    else{
      this.dataSource.filterPredicate = (data: Employee, filter: string) =>
       data.id.toString().trim().toLowerCase().indexOf(filter) != -1;
       this.dataSource.filter = filterValue;
    }
  }
  
  constructor(private router:Router, private emplService:EmployeeService, private dialog:MatDialog, private snackBar:MatSnackBar){
    this.ngOnInit();
  }

  edit(employee):void{
    this.emplService.findById(employee.id)
    .subscribe(data1=> {
      const dialogRef = this.dialog.open(UpdateEmployee, {
        width: '500px',
        data: data1
      })
      dialogRef.afterClosed().subscribe(result => {
        this.empl1 = result;
        if(result != null)
        {
        this.emplService.updateEmployee(this.empl1)
        .subscribe(data =>{
          console.error();
          this.snackBar.open("Data updated successfull");
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 3000);
          this.ngOnInit();
          this.empl = this.empl.filter(e => e!==employee)
          })
        }
        else{
          this.snackBar.open("Data not updated!!!");
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 3000);
        }
      });
    });
  }
  deleteEmployee(employee):void{
    this.confirmation = confirm('Do you want to delete the data?');
    if(this.confirmation == true){
    this.emplService.deleteEmployee(employee)
    .subscribe(data =>{
          this.empl = this.empl.filter(e => e!==employee)
          this.dataSource = new MatTableDataSource<Employee>(this.empl);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort1;
          this.snackBar.open("Data deleted successfull");
          setTimeout(() => {
            this.snackBar.dismiss();
          }, 3000);
       });
      }
      else{
        this.snackBar.open("Data is not Deleted");
        setTimeout(() => {
          this.snackBar.dismiss();
        }, 2000);
      }
  }
  title = 'angular';
}