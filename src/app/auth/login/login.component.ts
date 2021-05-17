import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: boolean | undefined;
  userLogin: Login = {
    email:'',password:''
  }

  constructor(private authservice: AuthService,private router: Router) { }

  ngOnInit(): void {
    console.log(this.userLogin);
  }

  login()
  {
    console.log(this.userLogin);
    //console.log('button click');
    this.authservice.login(this.userLogin).subscribe(response =>{
      if(response){
        //if auth service returns true,redirect to HomePage
        this.router.navigate(['/']);
      }
      else{
        //stay in the same page and show some error message
        this.invalidLogin = true;
      }
    },(err: any) => {
      this.invalidLogin = true;
      console.error(err);
    });
  }

  // simply observing two way binding, just for testing, remove it later
  get twoWayBindingInfo() { return JSON.stringify(this.userLogin) }
}
