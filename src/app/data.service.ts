import { Injectable } from '@angular/core';


import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {




  constructor( private _HttpClient:HttpClient ) { }



  recpies = ['carrot' , 'pizza' , 'potato' , 'chili' , 'pasta' , 'chocolate' , 'chicken'] 

  getData() 
  {





    let found = [] ; 
    for (let i  of this.recpies)
    {
       found.push(this._HttpClient.get(`https://forkify-api.herokuapp.com/api/search?q=${i}`))  
    }

    return found ; 
  

  }


  getRecpieData(id) 
  {
    return  this._HttpClient.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
  }

}
