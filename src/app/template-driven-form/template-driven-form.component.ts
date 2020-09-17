import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user';
import { FormdataService } from '../services/formdata.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})

export class TemplateDrivenFormComponent { 

  userModal = new User();

  constructor(private formdataService:FormdataService) { }

  onSubmit(form:NgForm) {
    let employee:User={
      id:form.value.id,
      name:form.value.name,
      email:form.value.email,
      username:form.value.username,
      password:form.value.password,
      confirmPassword:form.value.confirmPassword
    }
    alert('Form Submitted succesfully!!!\n Check the values in browser console.');
    console.log(employee);
    this.formdataService.onSet(employee);
    form.reset();
  }
}
