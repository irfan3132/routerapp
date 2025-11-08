import { Routes } from '@angular/router';
import { First } from '../app/first/first';
import { Second } from '../app/second/second';
import { NotFound } from './not-found/not-found'; 
import { ProductComponent } from './product-component/product-component';
import { ProductDetails } from './product-details/product-details';
export const routes: Routes = 
[
    {path:'' , component:First} ,
  {path:'first' , component:First} ,
  {path:'second' , component:Second},
  {path:'products' , component:ProductComponent},
   {path:'products/:id' , component:ProductDetails},
  {path:'**' , component:NotFound},   // must be at end
];
