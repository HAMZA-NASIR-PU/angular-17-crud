import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private _http: HttpClient) { }

  addEmployee(data: any) {
    return this._http.post('http://localhost:3000/employees', data);
  }

  getEmployees() {
    return this._http.get('http://localhost:3000/employees');
  }
}
