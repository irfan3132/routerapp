import { Component, OnInit } from '@angular/core';
enum Color {red , green , blue}
 


@Component({
  selector: 'first',
  imports: [],
  templateUrl: './first.html',
  styleUrl: './first.css'
})
export class First implements OnInit {

  constructor(){}

ngOnInit(): void {
  
  


  let numArray : Array<number>;
  numArray = [1,2,3,4,5,6,7,8,9];
  let results = numArray.filter(x => x> 2);   // filter return array
 // console.log(results);

  let num = numArray.find(x => x > 2);   // find will return first match
  //console.log(num);  // find will return single value
  let c:Color = Color.blue;  
 // console.log(c);// will print 2
let swapNumbs : [number, number];  // declare a tuple
swapNumbs = this.SwapNumber(88,99);
//console.log(swapNumbs[0]);  //99
//console.log(swapNumbs[1]);   //88

let department :any ;   // avoid using any
department = 'dept';
department = 10;

let department1 ;// if you do not mention type then it is any by default

department1 = 'dept';
department1 = 10;

//console.log(this.AddNumbers(20,50));
//console.log(this.AddNumbers(20,50,20));
//console.log(this.sub(20,50));  // num3 not provided so num3=10 will be used
//console.log(this.sub(20,50,20));
let numbers = [1,2,3,4]
//console.log(this.AddNumbers2(5,10,...numbers));
//console.log(this.AddNumbers2(5,10,6,7,8,9));

let concatresult = this.getItems<number>([1,2,3,4,5]);
let concatresult2 = this.getItems<string>(['a','b','c','d','e']);

console.log(concatresult);
console.log(concatresult2);

}
      SwapNumber(num1:number , num2:number) : [number,number]
      {
           return[num2,num1]
      }   // return mber,number] tuple

      AddNumbers(num1:number , num2:number , num3?:number) :number
      {
          return ( num3 ? num1+num2+ num3:num1+num2 );    //num3 is optional
      }  // above is conditional statement

       ProcessNumber(num1:number , num2:number) :void
      {
          (num1+num2);
      }

      sub = (num1:number , num2:number , num3=10):number => num1-num2-num3;  
      // another way to define function , num3 is optional 

          multiply = function (num1:number , num2:number):number 
          {
             return num1*num2;
          } ;  
      // another way to define function

      AddNumbers2(num1:number , num2:number ,  ...num3:number[]) :number
      {
          return num1+num2+ num3.reduce((a,b) => a+b,0);
      }    // ... rest operator  rest parameters

       getItems<Type>(items:Type[]):Type[]
       {
            return new Array<Type>().concat(items);

       }  // generic function
}

