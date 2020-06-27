import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http'


import {BehaviorSubject} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private _HttpClient:HttpClient) { }

  user = new BehaviorSubject(null)

  saveUserData(data) 
  {
    this.user.next(data)
  }

  sendRegisterData(data)
  {
   return this._HttpClient.post("http://routeegypt.herokuapp.com/signup" , data)
  }

  sendLoginData(data)
  {
    // this.user.next(data)
   return this._HttpClient.post("http://routeegypt.herokuapp.com/signin" , data)
  }


}
