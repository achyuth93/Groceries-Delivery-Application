import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  samsungPhones=[{img:"../../assets/samsung.jpg",name:"Samsung Galaxy A10",description:"best android mobile",price:12000,quantity:0},
  {img:"../../assets/samsung3.jpg",name:"Samsung Galaxy M31",description:"best Budget mobile",price:19000,quantity:0},
  {img:"../../assets/samsung.jpg",name:"Samsung Galaxy A71",description:"best Camera mobile",price:22000,quantity:0},
  {img:"../../assets/samsung3.jpg",name:"Samsung Galaxy S20",description:"best Gaming mobile",price:31000,quantity:0},
  {img:"../../assets/samsung.jpg",name:"Samsung Galaxy A51",description:"best Battery mobile",price:42000,quantity:0},
  {img:"../../assets/samsung.jpg",name:"Samsung Galaxy Note 10",description:"Latest Oxygen OS mobile",price:78000,quantity:0}
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
