import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrls: ['./pulses.component.css']
})
export class PulsesComponent implements OnInit {
  samsungPhones=[{img:"../../assets/moongdal.jpg",name:"Moong Dal Premium",description:"best quality dal",price:60,quantity:0},
  {img:"../../assets/peanuts.jpg",name:"Peanuts",description:"healthy and tasty",price:58,quantity:0},
  {img:"../../assets/uraddal.jpg",name:"Healthy Uraddal",description:"stay fit & healthy",price:75,quantity:0},
  {img:"../../assets/peanuts.jpg",name:"Peanuts Royal",description:"Less calories",price:68,quantity:0},
  {img:"../../assets/uraddal.jpg",name:"Premium Uraddal",description:"oraganic farmed dal",price:42,quantity:0},
  {img:"../../assets/moongdal.jpg",name:"Graded Moongdal",description:"good for healthy lifestyle",price:80,quantity:0}
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
