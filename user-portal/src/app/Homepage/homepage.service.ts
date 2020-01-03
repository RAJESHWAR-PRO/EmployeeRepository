import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { Employee } from '../Model/employee.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HomePageService {
  private router:Router;
  constructor(private http:HttpClient) {}

  private emplUrl = 'http://localhost:8099/employee';
  //private userUrl = '/api';

  public updateEmployee(employee){
    return this.http.put<Employee[]>(this.emplUrl+"/update/"+employee.id,employee);
  }
  public getEmployees() {
    return this.http.get<Employee[]>(this.emplUrl); 
  }

  public deleteEmployee(employee) {
    return this.http.delete(this.emplUrl + "/"+ employee.id);
  }

  public createEmployee(employee) {
    return this.http.post<Employee>(this.emplUrl, employee);
  }

}