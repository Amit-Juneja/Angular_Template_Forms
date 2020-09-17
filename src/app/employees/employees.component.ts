import { Component, OnInit } from '@angular/core';
import { FormdataService } from 'src/app/services/formdata.service';
import {User} from 'src/app/models/user';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employees:User[];

  constructor(private employeeService:FormdataService) { }

  ngOnInit(): void {
     this.employees = this.employeeService.onGet();
  }

  onDelete(id:Number)
  {
     this.employeeService.onDelete(id);
  }
}
