import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterLink , Router} from "@angular/router";
import { ProductComponent } from './product-component/product-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('router-app');
constructor(private router:Router){}
  goToSecondLink()
  {
     this.router.navigate(['second']);
  }
}
