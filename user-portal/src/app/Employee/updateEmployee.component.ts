import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from '../Model/employee.model';

@Component({
  selector: 'update-dialog',
  templateUrl: './updateEmployee.component.html',
})
export class UpdateEmployee {
  data1: Employee = new Employee();
  constructor( public dialogRef: MatDialogRef<UpdateEmployee>, @Inject(MAT_DIALOG_DATA) public data: Employee) {}

  onSubmit():void{
    if((this.data.empName !== "") && (this.data.empAddress !== "") && (this.data.empSalary != 0) && (this.data.maritalStatus !== ""))
    this.dialogRef.close(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}