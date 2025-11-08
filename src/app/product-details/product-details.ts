import { Component , OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../Services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails implements OnInit {
  product :any = {};
  constructor(private store: ProductService , private route:ActivatedRoute)
  {

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params:ParamMap) => 
    { let id = params.get('id');
      if(id)
        {
          this.store.getProduct( parseInt(id,10)).subscribe(product => this.product = product );
        }
      
    }
    )
  }

}
