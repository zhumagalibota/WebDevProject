import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, HttpClientModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj: Login;
  constructor(private http: HttpClient,
              private router: Router) {
    this.loginObj = new Login();
  }
  onLogin() {
    debugger;
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
      if(res.result){
        alert("Login success")
        this.router.navigateByUrl('/dashboard')
      } else{
        alert(res.message)
      }
    })
  }
}

export class Login {
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = "";
    this.Password = "";
  }
}
