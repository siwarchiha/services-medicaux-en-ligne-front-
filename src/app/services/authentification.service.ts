import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { login } from '../model/login';
import { Patient } from '../model/patient';
import { Medecin } from '../model/medecin';
const httpOptions={
  headers:new HttpHeaders({'Content-Type':'application/json'})
};
const TOKEN_KEY='AuthToken';
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  public currentUserSubject:BehaviorSubject<User>;
  public currentUser:Observable<User>;
  public loggedUser!: any;

  public emailloggedUser!: any;
  public RoleUser!: any;
  public idUser!: any;
  currentuser: any;
  constructor(private http: HttpClient, public router: Router) { 
    this.currentUserSubject=new BehaviorSubject<User>(JSON.parse(JSON.stringify(localStorage.getItem('currentUser')!)));
    this.currentUser=this.currentUserSubject.asObservable();
  }
  
  signUp(user: User): Observable<any> {
    let api = "http://localhost:8020/patient/signup";
  
    return this.http.post(api,user)

          .pipe(
        catchError(this.handleError)
      )
  }
  signUpPatient(patient: any): Observable<any> {
    let api = "http://localhost:8020/patient/signup";
  
    return this.http.post(api,patient)

          .pipe(
        catchError(this.handleError)
      )
  }
  signUpMedecin(medecin: any): Observable<any> {
    let api = "http://localhost:8020/medecin/signup";
  
    return this.http.post(api,medecin)

          .pipe(
        catchError(this.handleError)
      )
  }

    // Error 
    handleError(error: HttpErrorResponse) {
      let msg = '';
      if (error.error instanceof ErrorEvent) {
        // client-side error
        msg = error.error.message;
      } else {
        // server-side error
        msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      return throwError(msg);
    }
 // Sign-in 
 signIn(user: User) {
   
  return this.http.post<any>('http://localhost:8020/home/login', user)
  .pipe(map(user => {
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    //localStorage.setItem('currentUser', JSON.stringify(user));
   // this.currentUserSubject.next(user);
    console.log(user);
    console.log(user.username);
    this.loggedUser=user.username
    this.emailloggedUser=user.email;
    this.RoleUser=user.role;
    this.idUser=user.id;
    console.log(this.loggedUser);
   console.log(this.idUser);
    return user;
    ///.subscribe((res: any) => {
     // localStorage.setItem('access_token', res.token);
     // this.getUserProfile(res._id).subscribe((res) => {
       // this.currentUser = res;
      //  this.router.navigate(['user-profile/' + res.msg._id]);
    //  })
    }))
    ;
}
  public get currentUserValue():User
  {
    return this.currentUserSubject.value;
  }

  getToken() {
    return this.currentuser = JSON.parse(localStorage.getItem('currentUser')!);
  }


  doLogout()
  {
      this.router.navigate(['/']);
    }

  /*doLogout()
  {
    let removeToken = localStorage.removeItem('currentUser');
    if (removeToken == null)
    {
      this.router.navigate(['/']);
    }
  }*/

   // User profile
   /*getUserProfile(id:any): Observable<any> {
    let api = `http://localhost:4000/user/user-profile/:`+id;
    return this.http.get(api, { headers: this.headers }).pipe(
      map((res: any) => {
        return res || {}
      }),
      catchError(this.handleError)
    )
  } */
  login(log:login){
    return this.http.post<any>('http://localhost:8020/home/login', log);
  }
}
