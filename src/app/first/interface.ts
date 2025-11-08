export interface User {name:string , age?:number , id :number , address:string}
interface Employee3 extends User {salary:number}
export interface Login {Login():User} // a mothod Login return User
let user :User = {name:'Irfan' , id:1 , address:'Lahore'}

let {name:userName, address} :User = {name:'Irfan' , id:1 , address:'Lahore'}
// above is bject de structuring
userName = "abccc";

let users:User[] = [
    {name:'Irfan' , id:1 , address:'Lahore'} , 
    {name:'Imran' , id:2 , address:'Multan'},
    {name:'Zargham' , id:3 , address:'KSA'}
]



let [user1, user2, ...restUsers]:User[] = [
    {name:'Irfan' , id:1 , address:'Lahore'} , 
    {name:'Imran' , id:2 , address:'Multan'},
    {name:'Zargham' , id:3 , address:'KSA'}
]
// Array de structuring
// user1 is {name:'Irfan' , id:1 , address:'Lahore'} 
// user2 is  {name:'Imran' , id:2 , address:'Multan'}
// interfaces does not exists in javascript , usually not used so use classes only