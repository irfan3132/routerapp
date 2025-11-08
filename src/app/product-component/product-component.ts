import { Component , OnInit } from '@angular/core';
import { ProductService } from '../Services/product-service';
import { CommonModule } from '@angular/common';
// import { RouterLink } from "../../../node_modules/@angular/router/router_module.d";
import { Routes , RouterModule , RouterLink } from '@angular/router';

@Component({
  selector: 'product-component',
  imports: [CommonModule, RouterLink],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent implements OnInit {
products:any[] =[];
constructor(private store:ProductService){}
ngOnInit(): void {
  this.store.getAllProducts().subscribe( products => {
      this.products = products;
  });
}
}
