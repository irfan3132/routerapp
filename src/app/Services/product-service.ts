import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private data :any[] = 
  [
    {id:1 , name:'piano', price:1000},
    {id:2 , name:'guitar', price:2000},
    {id:3 , name:'drums', price:300}
  ];
  constructor(){}
  getAllProducts()     // return an observable of data
  { 
    return of(this.data)
  }   // to get data subscribe it 
  getProduct(id:number)  
  {
     return of (this.data.find( p => p.id == id));
  }
}
