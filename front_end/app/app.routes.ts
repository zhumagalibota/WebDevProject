import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NewsComponent } from './news/news.component';
import { ProfileComponent } from './profile/profile.component';
import { ImportNicknameComponent } from './import-nickname/import-nickname.component';
import { FriendsComponent } from './friends/friends.component'; // Import FriendsComponent
import { NotificationsComponent } from './notifications/notifications.component'; // Import NotificationsComponent

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'news',
        component: NewsComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'import-nickname',
        component: ImportNicknameComponent,
      },
      // Add routes for Friends and Notifications
      {
        path: 'friends',
        component: FriendsComponent,
      },
      {
        path: 'notifications',
        component: NotificationsComponent,
      },
    ],
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
