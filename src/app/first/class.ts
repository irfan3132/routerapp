//import { Login,User } from "./interface";
import * as UserLogin from "./interface";
interface Address{street:string , city:string,state:string,pin:string}
class Employee implements UserLogin.Login {
    #id!:number;   // # means private
    name!:string;   // by default public
    address:Address ;
    constructor(id:number, name:string,address:Address)
    {
        this.#id = id ;
        this.name=name;
        this.address=address;
    }
    Login(): UserLogin.User {
       return {name:'Irfan' , id:1 , address:'Lahore'};
    }
    // in type script only one constructor either default or parametrized


}
let john = new Employee(1,'John', {street:'abc',city:'abc',state:'abc',pin:'abc'});
//john.address='';
//john.id= 1;

// by default all classes and properties or functions are public
class Employee2 {
    id:number;
    #name:string;    // # is native syntax for creating private variable in javascript
    private address:string ;
    protected address2:string ;  // protected is availabe within class like private and class that extends the class
    constructor(id:number , name:string , address:string , address2:string)
    {
            this.id= id ;
            this.#name= name ;
            this.address= address ;
            this.address2=address2;

    }
    getNameWithAddress():string 
    {
        return this.#name + " Stays at " + this.address ;

    }
    getNameWithAddress2():string 
    {
        return `${this.#name}  Stays at  ${this.address}` ;
        // tild sign without shift , no need for concatenation
    }
    // in type script only one constructor either default or parametrized

   static getEmployeeCount():number{return 50;}

   get empId():number{return this.id;}  // get property
   set empId(id:number){this.id= id;}   // set property 

}
let john2 = new Employee2(1,'john', 'lahore','islamabad');
john2.empId = 200;   // set emp id to 200;
console.log(john2.empId); // get emp id
 let num = Employee2.getEmployeeCount();

class Manager extends Employee2{
    constructor(id:number , name:string , address:string , address2:string)
    {
           super(id,name,address,address2);
    }

    }
  let m1 = new Manager(1,'john', 'lahore','islamabad');
  