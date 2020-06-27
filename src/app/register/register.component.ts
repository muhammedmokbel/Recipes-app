import { Component, OnInit } from '@angular/core';


import {FormControl , FormGroup , Validators} from '@angular/forms'


import {AuthService} from '../auth.service'

import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform:FormGroup = new FormGroup({
    "first_name" : new FormControl() , 
    "last_name" : new FormControl() , 
    "age" : new FormControl()  , 
    "email" : new FormControl() , 
    "password" : new FormControl() 
  })

  getRegData(data) 
  {

    this._AuthService.sendRegisterData(data.value).subscribe( (data)=>{
        if (data.message == "success")
        {
            this._Router.navigate(['/login'])
        }
    } )


  }

  constructor(public _AuthService:AuthService , public _Router:Router) { }

  ngOnInit(): void {
  }

}
