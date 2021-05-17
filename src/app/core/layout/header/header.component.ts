import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isAuth!: boolean;
  user!: User;

  constructor(private authservice: AuthService) { }

  ngOnInit(): void {
    this.authservice.isAuth.subscribe(data=>{
      this.isAuth = data;
    });

    this.authservice.currentUser.subscribe(data=>{
      this.user = data;
      console.log(this.user);
    });
  }

}
