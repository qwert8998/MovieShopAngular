import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ApiService } from './api.service';
import { Login } from 'src/app/shared/models/login';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // can be used only inside this class to push data
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  // public here so that any component can subscribe to this subject and get the data
  public currentUser = this.currentUserSubject.asObservable();

  private isAuthSubject = new BehaviorSubject<boolean>(false);
  // header component can use this subject to check whether use is authticated so that if tru hide login/register buttons in header
  public isAuth = this.isAuthSubject.asObservable();

  private user!: User;

  constructor(private apiService: ApiService) { }

  //take um/pw from login component and post it to API service that will post to API
  login(userlogin: Login){
    return this.apiService.create('Account/Login',userlogin).pipe(
      map(response => {
        if(response)
        {
          //save it to local storage
          localStorage.setItem('token',response.token);
          this.populateUserInfo();
          return true;
        }
        return false;
      })
    );
  }

  populateUserInfo(){
    //get the token from local storage, decode it and get the user info
    var token = localStorage.getItem('token');
    if(token) //if token is not null
    {
      //decode token
      var decodedToken = new JwtHelperService().decodeToken(token);
      this.user = decodedToken;
      //Subject in RXJS => shared info to unrelated component.
      //Login => auth => push data to UserSubject
      //Other components => get UserSubject from Subject
      this.currentUserSubject.next(this.user);
      this.isAuthSubject.next(true);
    }
  }

  logout(){
    // remove the token from local storage and change the subjects to default values
    localStorage.removeItem('token');
    this.currentUserSubject.next({} as User);
    this.isAuthSubject.next(false);
  }
}
