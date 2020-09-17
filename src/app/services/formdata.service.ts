import { Injectable } from '@angular/core';
import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FormdataService {

  employees:User[]=[
    {
      id:1,
      name:"Employee1",
      email:"Employee1@gmail.com",
      username:"username.user1",
      password:"AmitJuneja1",
      confirmPassword:"AmitJuneja1"
   }
  ];

  constructor() { }

  onGet()
  {
    return this.employees;
  }

  onSet(user:User)
  {
     this.employees.push(user);
  }

  
  onDelete(id:Number)
  {
     let employee = this.employees.find(x=>x.id===id);
     let index =this.employees.indexOf(employee,0);
     this.employees.splice(index,1);
  }

  onGetEmployee(id:number)
  {
    return this.employees.find(x=>x.id===id);
  }
  onUpdate(employee1:User,employee2:User)
  {
      let oldemployee = this.employees.find(x=>x.id===employee2.id);
      let index = this.employees.indexOf(oldemployee,0);
      this.employees.splice(index,1);
      oldemployee.id = employee1.id;
      oldemployee.name = employee1.name;
      oldemployee.email = employee1.email;
      oldemployee.username = employee1.username;
      oldemployee.password = employee1.password;
      oldemployee.confirmPassword = employee1.confirmPassword;
      this.employees.push(oldemployee);
  }
}
