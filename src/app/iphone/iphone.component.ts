import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.component.html',
  styleUrls: ['./iphone.component.css']
})
export class IphoneComponent implements OnInit {

  IPhones=[{img:"../../assets/iphone.jpg",name:"IPhone 11",description:"best Security mobile",price:12000,quantity:0},
  {img:"../../assets/iphone2.jpg",name:"IPhone xs",description:"best Budget mobile",price:19000,quantity:0},
  {img:"../../assets/iphone.jpg",name:"IPhone 5",description:"best Camera mobile",price:22000,quantity:0},
  {img:"../../assets/iphone2.jpg",name:"IPhone 6",description:"best Gaming mobile",price:31000,quantity:0},
  {img:"../../assets/iphone.jpg",name:"IPhone 8",description:"best Battery mobile",price:42000,quantity:0},
  {img:"../../assets/iphone2.jpg",name:"IPhone 3",description:"Latest Iphone OS mobile",price:78000,quantity:0}
]

phones=[];
addPhone(p){
this.phones.push(p)
}

result:number;
addResult(){
 let sum=0;
 for (let index = 0; index < this.phones.length; index++) {
   const element = this.phones[index];
   sum +=element.quantity*element.price
   console.log(sum)
 } 
this.result=sum;
}

  constructor() { }

  ngOnInit(): void {
  }

}
