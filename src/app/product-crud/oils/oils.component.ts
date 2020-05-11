import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-oils',
  templateUrl: './oils.component.html',
  styleUrls: ['./oils.component.css']
})
export class OilsComponent implements OnInit {
  samsungPhones=[{img:"../../assets/cowghee.jpg",name:"Cow Ghee",description:"best quality ghee",price:160,quantity:0},
  {img:"../../assets/mustardoil.jpg",name:"Mustard Oil",description:"best for cooking",price:158,quantity:0},
  {img:"../../assets/saffolagold.jpg",name:"Saffola Gold Oil",description:"stay fit & healthy",price:175,quantity:0},
  {img:"../../assets/mustardoil.jpg",name:"Premium Mustard Oil",description:"Less calories",price:168,quantity:0},
  {img:"../../assets/saffolagold.jpg",name:"Saffola Platinum",description:"biriyani special oil",price:142,quantity:0},
  {img:"../../assets/cowghee.jpg",name:"Natural Cow Ghee",description:"good for healthy skin",price:180,quantity:0}
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
