import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(mydata:any[] , term:string):any[] {


      if(term == undefined || term == "")
        return mydata



    

        let found:any = [] 


      found =   mydata.filter( (data)=>{
          return  data.title.toLowerCase().includes(term)
        } )

        console.log(found)

        return found ;
      

      
  }

}
