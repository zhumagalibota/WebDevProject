import { Routes } from '@angular/router';
import {LayoutComponent} from "./layout/layout.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LoginComponent} from "./login/login.component";
import {SignupComponent} from "./signup/signup.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {ForgotPasswordComponent} from "./forgot-password/forgot-password.component";

export const routes: Routes = [
  {
    path:'', redirectTo: 'login', pathMatch: 'full',
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'',
    component:LayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
      }
    ]
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
