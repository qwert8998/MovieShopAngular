import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private headers: HttpHeaders | undefined;

  //Like the basic service, other services can communicate through this service
  //HttpClient => used to communicate with API
  constructor(protected http: HttpClient /*Dependency Injection*/) { }

  //C# compare with Angular
  // filter is equivalent to Where
  // map is equivalent to Select
  // every is equivalent to All
  // some is equivalent to Any

  //get array of json objects
  getList(path: string): Observable<any[]> {
    //var apiurl = environment.apiurl;

    return this.http.get(`${environment.apiurl}${path}`).pipe(
      map(resp => resp as any[])
    )
  }

  //get single object
  getOne(path: string, id?: number/*id? which means this parameter is optional*/): Observable<any> {

    return this.http.get(`${environment.apiurl}${path}` + id).pipe(
      map(resp => resp as any)
    )
  }

  //post something
  create(path: string, resource: any, options?: any): Observable<any> {
    return this.http
      .post(`${environment.apiurl}${path}`, resource, { headers: this.headers })
      .pipe(map((response) => response));
  }

  //PUT
  update() {

  }

  //Delete
  delete() {

  }
}
