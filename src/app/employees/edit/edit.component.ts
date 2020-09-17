import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { FormdataService } from 'src/app/services/formdata.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  userModal = new User();

  id:number;
  header:string;
  employee:User={
   id:0,
   name:"",
   email:"",
   username:"",
   password:"",
   confirmPassword:"",  
  }

  constructor(private route:ActivatedRoute,private formdataService:FormdataService) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.header = "Edit Employee";  
    
       this.employee = this.formdataService.onGetEmployee(this.id);
  }

  onSubmit(form:NgForm)
  {
    let changedemployee:User={
      id:form.value.id,
      name:form.value.name,
      email:form.value.email,
      username:form.value.username,
      password:form.value.password,
      confirmPassword:form.value.confirmPassword
    }
    this.formdataService.onUpdate(changedemployee,this.employee);
    alert('Form Edited succesfully!!!');
    form.reset();
  }
}
