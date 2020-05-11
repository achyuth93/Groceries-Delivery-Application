import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pulses',
  templateUrl: './pulses.component.html',
  styleUrls: ['./pulses.component.css']
})
export class PulsesComponent implements OnInit {
  samsungPhones=[{img:"../../assets/sonaMassori.jpg",name:"Sona Massori Premium",description:"best quality rice",price:60,quantity:0},
  {img:"../../assets/basmatiRice.jpg",name:"Special Basmati Rice",description:"best for biriyani",price:58,quantity:0},
  {img:"../../assets/brownRice.jpg",name:"Healthy Brown Rice",description:"stay fit & healthy",price:75,quantity:0},
  {img:"../../assets/basmatiRice.jpg",name:"Ponni Raw Rice",description:"Less calories",price:68,quantity:0},
  {img:"../../assets/brownRice.jpg",name:"Pulav Rice",description:"biriyani special rice",price:42,quantity:0},
  {img:"../../assets/sonaMassori.jpg",name:"Dosa Rice",description:"good for soft dosa",price:80,quantity:0}
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
