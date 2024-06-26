import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormComponent } from './form/form.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'students', component: StudentsComponent},
  {path:'student-form', component: StudentFormComponent},
  {path:'student-form/:id', component: StudentFormComponent},
  {path:'about', component: AboutComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'form', component: FormComponent},
  {path:'**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
