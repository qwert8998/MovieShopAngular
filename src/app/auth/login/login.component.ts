import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/shared/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userLogin: Login = {
    email:'',password:''
  }

  constructor() { }

  ngOnInit(): void {
    console.log(this.userLogin);
  }

  login()
  {
    console.log(this.userLogin);
    console.log('button click');
  }

  // simply observing two way binding, just for testing, remove it later
  get twoWayBindingInfo() { return JSON.stringify(this.userLogin) }
}
