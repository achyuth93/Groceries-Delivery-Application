import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oneplus',
  templateUrl: './oneplus.component.html',
  styleUrls: ['./oneplus.component.css']
})
export class OneplusComponent implements OnInit {

  OnePlusPhones=[{img:"../../assets/oneplus2.jpg",name:"OnePlus 7T",description:"best android mobile",price:12000,quantity:0},
  {img:"../../assets/oneplus2.jpg",name:"OnePlus 7 Pro",description:"best Budget mobile",price:19000,quantity:0},
  {img:"../../assets/oneplus2.jpg",name:"OnePlus 6",description:"best Camera mobile",price:22000,quantity:0},
  {img:"../../assets/oneplus2.jpg",name:"OnePlus 8",description:"best Gaming mobile",price:31000,quantity:0},
  {img:"../../assets/oneplus2.jpg",name:"OnePlus 5",description:"best Battery mobile",price:42000,quantity:0},
  {img:"../../assets/oneplus2.jpg",name:"OnePlus 7T Pro",description:"Latest Oxygen OS mobile",price:78000,quantity:0}
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
