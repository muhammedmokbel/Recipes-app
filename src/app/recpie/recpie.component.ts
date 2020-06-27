import { Component, OnInit } from '@angular/core';


import {DataService} from '../data.service'


import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-recpie',
  templateUrl: './recpie.component.html',
  styleUrls: ['./recpie.component.css']
})
export class RecpieComponent implements OnInit {

  mydata:any; 

  intg:any; 

  loaded:boolean = false ; 

  constructor( _DataService:DataService  , _ActivatedRoute:ActivatedRoute ) { 

    let x =   _ActivatedRoute.snapshot.paramMap.get('id')
    _DataService.getRecpieData(x).subscribe( (data)=>{
        this.mydata = data.recipe ; 
        this.intg = data.recipe.ingredients ; 
        this.loaded = true
    } )

  }

  ngOnInit(): void {
  }

}
