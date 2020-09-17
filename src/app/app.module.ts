import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomeComponent } from './home/home.component';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { ValidateUserNameDirective } from './directives/validate-user-name.directive';
import { EmployeesComponent } from './employees/employees.component';
import { EditComponent } from './employees/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    PasswordPatternDirective,
    MatchPasswordDirective,
    ValidateUserNameDirective,
    EmployeesComponent,
    EditComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'table', component: EmployeesComponent },
      { path: 'template-form', component: TemplateDrivenFormComponent },
      { path:'table/employee/edit/:id',component:EditComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
